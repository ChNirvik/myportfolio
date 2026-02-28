import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const workDir = path.join(process.cwd(), 'public', 'My Work');

        // Define standard categories to map folders to
        const categoryMap: Record<string, string> = {
            'Brand Ads': 'Advertising',
            'Brand Collateral': 'Marketing Materials',
            'On Ground Events': 'Event Production',
            'PR Activity': 'Public Relations',
        };

        const folders = fs.readdirSync(workDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
            .map(dirent => {
                const folderPath = path.join(workDir, dirent.name);
                const files = fs.readdirSync(folderPath)
                    .filter(file => !file.startsWith('.'))
                    .map(file => {
                        const ext = file.toLowerCase().split('.').pop() || '';
                        let type = 'other';
                        if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
                            type = 'image';
                        } else if (['pdf'].includes(ext)) {
                            type = 'pdf';
                        } else if (['doc', 'docx'].includes(ext)) {
                            type = 'doc';
                        }
                        return {
                            name: file,
                            path: `/My Work/${dirent.name}/${file}`,
                            type
                        };
                    });

                // Auto-select a thumbnail (prefer images over pdfs if available)
                const imageFile = files.find(f => f.type === 'image');
                const thumbnail = imageFile ? imageFile.path : '';

                return {
                    id: dirent.name.toLowerCase().replace(/\s+/g, '-'),
                    title: dirent.name,
                    category: categoryMap[dirent.name] || 'Project',
                    thumbnail,
                    files
                };
            });

        const socialMediaProject = {
            id: 'social-media',
            title: 'Social Media',
            category: 'Digital Strategy',
            thumbnail: '', // Empty thumbnail handles fallback rendering in frontend
            files: [], // Empty files to maintain structure
            socialLinks: {
                "Social Handles": [
                    "https://www.instagram.com/actorprepares/",
                    "https://www.instagram.com/sampoorna_yoga/",
                    "https://www.instagram.com/explorex_inc/",
                    "https://www.instagram.com/snugkins/",
                    "https://www.instagram.com/lacasabrewery",
                    "https://www.instagram.com/jookkbarandkitchen"
                ],
                "La Casa": [
                    "https://www.instagram.com/p/Chg7Uy6sGPq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/Cr99D1Lot_M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CtJ3GdrAb8c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CuZqtiDgZNm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/Cu9chU1h6B2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CvIFnMMhd43/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CvM78o5h20T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CvhtFxKJR8Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/p/CwNWmDgBh-a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/Cw0MhOiBHXy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/p/CxAJEVdhx4T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CxQozvVhzt1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CyfmrKbBrma/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CzBSRnsBzPX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/Czv6dqNB0vp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/p/C1G1cocrT3E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C50WLMCtr4I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/p/DA3dlCpTBLr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                ],
                "Explorex": [
                    "https://www.instagram.com/reel/CrLVkc7pYeh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CpprAh6JN7P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/tv/Cf0X-M_J66W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CzdvuRqhDPi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CzjTIAHPTtP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/p/CwHm3ZvJMtZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CteUtGHp_En/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C0A-LVnv_xg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                ],
                "Jook Taproom": [
                    "https://www.instagram.com/reel/C4k6gecypu6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C2NRvcgSLLD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C2Pg1pzrErz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C14VUq3r7zB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C1HcL3Xr_bD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C1G0CVAr1cF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/C0rCg5xLJN0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CzlGlrJrsaY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CzWJzTqLee2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CzJNalAyHQI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    "https://www.instagram.com/reel/CwnMlrHSMgJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                ],
                "Oia Bangalore": [
                    "https://www.instagram.com/reel/C0_tRs5LDws/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                ]
            }
        };

        // ---------------------------------------------------------
        // Fetch GitHub Repositories for AI Projects
        // ---------------------------------------------------------
        let githubRepos: any[] = [];
        try {
            const githubRes = await fetch('https://api.github.com/users/ChNirvik/repos?sort=updated&per_page=12', {
                next: { revalidate: 3600 } // Cache for 1 hour
            });
            if (githubRes.ok) {
                const repos = await githubRes.json();
                githubRepos = repos
                    .filter((repo: any) => !repo.fork) // Optionally filter out forks
                    .map((repo: any) => ({
                        name: repo.name,
                        description: repo.description,
                        html_url: repo.html_url,
                        language: repo.language,
                        stars: repo.stargazers_count
                    }));
            }
        } catch (e) {
            console.error('Failed to fetch github repos:', e);
        }

        const aiProjectsProject = {
            id: 'ai-projects',
            title: 'AI Projects',
            category: 'Software Engineering',
            thumbnail: '', // Empty thumbnail handles fallback rendering in frontend
            files: [], // Empty files to maintain structure
            githubProfile: 'https://github.com/ChNirvik',
            githubRepos
        };

        return NextResponse.json({ projects: [...folders, socialMediaProject, aiProjectsProject] });
    } catch (error) {
        console.error('Error reading My Work directory:', error);
        return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
    }
}
