'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ProjectFile {
    name: string;
    path: string;
    type: string;
}

interface ProjectCategory {
    id: string;
    title: string;
    category: string;
    thumbnail: string;
    files: ProjectFile[];
    socialLinks?: Record<string, string[]>;
    githubProfile?: string;
    githubRepos?: {
        name: string;
        description: string;
        html_url: string;
        language: string;
        stars: number;
    }[];
}

export default function Projects() {
    const [projects, setProjects] = useState<ProjectCategory[]>([]);
    const [activeProject, setActiveProject] = useState<ProjectCategory | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/work')
            .then(res => res.json())
            .then(data => {
                if (data.projects) {
                    setProjects(data.projects);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load projects", err);
                setIsLoading(false);
            });
    }, []);

    const handleProjectClick = (project: ProjectCategory) => {
        setActiveProject(project);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeProjectView = () => {
        setActiveProject(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section className="min-h-screen bg-[#121212] py-32 px-4 md:px-12 lg:px-24 relative">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Selected Work
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        A showcase of recent projects blending technical excellence with premium aesthetics.
                    </p>
                </motion.div>

                {/* Grid */}
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 rounded-full border-t-2 border-emerald-400 animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                onClick={() => handleProjectClick(project)}
                                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 cursor-pointer"
                            >
                                {/* Image Container with subtle zoom on hover */}
                                <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center bg-gray-900">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 to-transparent z-10" />
                                    {project.thumbnail ? (
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className={`flex flex-col items-center justify-center ${project.id === 'social-media' ? 'text-pink-500/40' : project.id === 'ai-projects' ? 'text-blue-500/40' : 'text-emerald-500/40'} group-hover:scale-110 transition-transform duration-700 z-0`}>
                                            {project.id === 'social-media' ? (
                                                <svg className="w-24 h-24 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            ) : project.id === 'ai-projects' ? (
                                                <svg className="w-24 h-24 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.635-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-24 h-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full z-20 p-8 text-white">
                                    <p className="text-sm font-medium uppercase tracking-widest text-emerald-400 mb-2 drop-shadow-md">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                                        {project.githubRepos ? `${project.githubRepos.length} Repositories` : project.socialLinks ? `${Object.values(project.socialLinks).flat().length} Links` : `${project.files.length} ${project.files.length === 1 ? 'Item' : 'Items'}`}
                                    </p>

                                    {/* Discover Button/Link */}
                                    <div className="mt-4 flex items-center text-sm font-medium tracking-wide uppercase text-white/70 group-hover:text-white transition-colors">
                                        <span>View Resources</span>
                                        <svg
                                            className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Expanded Modal View Context */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-12"
                        onClick={closeProjectView}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-6xl max-h-full overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center z-10">
                                <div>
                                    <p className="text-sm text-emerald-400 font-medium uppercase tracking-widest mb-1">{activeProject.category}</p>
                                    <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                                </div>
                                <button
                                    onClick={closeProjectView}
                                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content - Displaying Files, Links, or Repos */}
                            <div className="p-6 md:p-8">
                                {activeProject.githubRepos ? (
                                    <div className="space-y-8">
                                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                            <h4 className="text-xl font-semibold text-blue-400">GitHub Repositories</h4>
                                            {activeProject.githubProfile && (
                                                <a href={activeProject.githubProfile} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                                                    View Profile
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {activeProject.githubRepos.map((repo, idx) => (
                                                <a key={idx} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/50 rounded-xl p-6 flex flex-col gap-4 group transition-all">
                                                    <div className="flex justify-between items-start">
                                                        <h5 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 truncate mr-2" title={repo.name}>{repo.name}</h5>
                                                        <svg className="w-5 h-5 flex-shrink-0 text-gray-500 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-400 text-sm line-clamp-3">{repo.description || 'No description provided.'}</p>
                                                    <div className="flex items-center gap-4 mt-auto pt-4 text-xs font-medium text-gray-500">
                                                        {repo.language && (
                                                            <span className="flex items-center gap-1.5">
                                                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                                                {repo.language}
                                                            </span>
                                                        )}
                                                        <span className="flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            {repo.stars || 0}
                                                        </span>
                                                    </div>
                                                </a>
                                            ))}
                                            {activeProject.githubRepos.length === 0 && (
                                                <p className="text-gray-400">No public repositories found.</p>
                                            )}
                                        </div>
                                    </div>
                                ) : activeProject.socialLinks ? (
                                    <div className="space-y-12">
                                        {Object.entries(activeProject.socialLinks).map(([brand, links], idx) => (
                                            <div key={idx} className="space-y-6">
                                                <h4 className="text-xl font-semibold text-emerald-400 border-b border-white/10 pb-2">{brand}</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {links.map((link, linkIdx) => (
                                                        <a
                                                            key={linkIdx}
                                                            href={link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/50 rounded-xl p-4 flex items-center justify-between group transition-all"
                                                        >
                                                            <div className="flex items-center space-x-3 overflow-hidden">
                                                                <svg className="w-6 h-6 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                                </svg>
                                                                <span className="text-sm font-medium text-gray-200 truncate group-hover:text-emerald-400 transition-colors">
                                                                    {link.includes('/p/') ? 'Instagram Post' : link.includes('/reel/') ? 'Instagram Reel' : 'Instagram Profile'}
                                                                </span>
                                                            </div>
                                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors ml-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {activeProject.files.map((file, idx) => (
                                            <div key={idx} className="bg-black/40 rounded-xl overflow-hidden border border-white/5 flex flex-col group">
                                                <div className="h-48 w-full relative bg-gray-900 flex items-center justify-center p-4">
                                                    {file.type === 'image' ? (
                                                        <img src={file.path} alt={file.name} className="max-h-full max-w-full object-contain" />
                                                    ) : (
                                                        <div className="text-center group-hover:scale-105 transition-transform duration-300">
                                                            <svg className={`w-16 h-16 mx-auto mb-2 ${file.type === 'pdf' ? 'text-red-400' : file.type === 'doc' ? 'text-blue-400' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                {file.type === 'pdf' ? (
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                                ) : (
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                )}
                                                            </svg>
                                                            <span className="text-gray-400 text-sm font-medium">
                                                                {file.type === 'pdf' ? 'PDF Document' : file.type === 'doc' ? 'Word Document' : 'Document'}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4 border-t border-white/5 flex-grow flex flex-col justify-between items-start gap-4">
                                                    <p className="text-sm text-gray-300 truncate w-full" title={file.name}>{file.name}</p>
                                                    <a
                                                        href={file.path}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-xs font-semibold py-1.5 px-3 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                                                    >
                                                        Open File
                                                        <svg className="ml-1.5 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
