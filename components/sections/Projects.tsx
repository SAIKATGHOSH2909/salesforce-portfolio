"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CustomImage } from "@/components/ui/Image";
import { staggerItem, fadeInUp, scale } from "@/components/animations/variants";
import { projects } from "@/data/projects";
import { Project } from "@/types";

/**
 * Projects section with expandable project cards
 * Professional Salesforce case studies with impact metrics
 */
export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProjectData?.imageUrls && selectedImageIndex < selectedProjectData.imageUrls.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Enterprise Case Studies"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
            >
              <Card variant="glass" hover className="h-full flex flex-col">
                <div className="flex-1">
                  {/* Project Thumbnail */}
                  {project.thumbnailUrl && (
                    <motion.div
                      className="mb-4 relative w-full h-48 rounded-lg overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CustomImage
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        fallbackSrc="/images/projects/placeholder.jpg"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                    </motion.div>
                  )}

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary-500/10 text-primary-300 rounded-full border border-primary-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                    {project.title}
                  </h3>

                  {/* Business Problem */}
                  <p className="text-sm text-secondary-400 mb-4 line-clamp-3">
                    {project.businessProblem}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary-800/50 text-secondary-300 rounded border border-secondary-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(51, 65, 85, 0.8)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <motion.span
                        className="px-2 py-1 text-xs text-secondary-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        +{project.technologies.length - 4} more
                      </motion.span>
                    )}
                  </div>

                  {/* Impact Metrics */}
                  {project.impact && project.impact.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {project.impact.slice(0, 2).map((impact, impactIndex) => (
                        <motion.div
                          key={impactIndex}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: impactIndex * 0.1 }}
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: impactIndex * 0.5,
                            }}
                          >
                            <TrendingUp className="h-4 w-4 text-primary-400" />
                          </motion.div>
                          <span className="text-secondary-300">
                            <span className="font-semibold">{impact.metric}:</span>{" "}
                            <span className="text-secondary-400">{impact.value}</span>
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Details Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => handleProjectSelect(project.id)}
                >
                  View Case Study
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={scale}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-secondary-900 rounded-xl border border-secondary-800 p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-secondary-400 hover:text-secondary-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Project Images Gallery */}
              {selectedProjectData.imageUrls && selectedProjectData.imageUrls.length > 0 && (
                <div className="mb-6 relative">
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-secondary-800">
                    <CustomImage
                      src={selectedProjectData.imageUrls[selectedImageIndex]}
                      alt={`${selectedProjectData.title} - Image ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain"
                      fallbackSrc="/images/projects/placeholder.jpg"
                    />
                    {selectedProjectData.imageUrls.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          disabled={selectedImageIndex === 0}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-secondary-900/80 rounded-full text-secondary-100 hover:bg-secondary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          disabled={selectedImageIndex === selectedProjectData.imageUrls!.length - 1}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-secondary-900/80 rounded-full text-secondary-100 hover:bg-secondary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProjectData.imageUrls.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedImageIndex(idx)}
                              className={`h-2 rounded-full transition-all ${
                                idx === selectedImageIndex
                                  ? "w-8 bg-primary-400"
                                  : "w-2 bg-secondary-600"
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Category Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 text-xs font-semibold bg-primary-500/10 text-primary-300 rounded-full border border-primary-500/20">
                  {selectedProjectData.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-secondary-100 mb-6">
                {selectedProjectData.title}
              </h2>

              {/* Business Problem */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-200 mb-2">
                  Business Problem
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {selectedProjectData.businessProblem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-200 mb-2">
                  Solution
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {selectedProjectData.solution}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-200 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm bg-primary-500/10 text-primary-300 rounded-lg border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              {selectedProjectData.impact && selectedProjectData.impact.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary-200 mb-3">
                    Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProjectData.impact.map((impact, impactIndex) => (
                      <div
                        key={impactIndex}
                        className="p-4 bg-secondary-800/50 rounded-lg border border-secondary-700"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="h-5 w-5 text-primary-400" />
                          <span className="font-semibold text-secondary-200">
                            {impact.metric}
                          </span>
                        </div>
                        <p className="text-secondary-300">{impact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              {selectedProjectData.details && (
                <div>
                  <h3 className="text-lg font-semibold text-secondary-200 mb-2">
                    Additional Details
                  </h3>
                  <p className="text-secondary-300 leading-relaxed">
                    {selectedProjectData.details}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
