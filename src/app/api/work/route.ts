import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Standard predefined categories instead of reading from disk
        const folders = [
            {
                id: 'brand-ads',
                title: 'Brand Ads',
                category: 'Advertising',
                thumbnail: '', // You can paste a public image URL here for the thumbnail
                files: [
                    {
                        name: 'Brand Ad Link 1',
                        path: 'https://drive.google.com/file/d/1VByP9feZEE77JRFs7L9UE2t-Af6mEssh/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 2',
                        path: 'https://drive.google.com/file/d/16i09F6k9vzvJbdRk08GEbf5aWGFdqjVP/view?usp=drive_link',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 3',
                        path: 'https://drive.google.com/file/d/1uNlIXB8Kvuf_xIgOZAbFry1R3nUYGaa3/view?usp=drive_link',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 4',
                        path: 'https://drive.google.com/file/d/16_F49w-Ci_G_PXjhAc3HvgKa1biqO9m6/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 5',
                        path: 'https://drive.google.com/file/d/1EJ9eePAp5WcCbnD33yXWGgCU3UYM8H-b/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 6',
                        path: 'https://drive.google.com/file/d/1Nb-EO9YYw1ejGk959bqHSiwwym5WjxI0/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 7',
                        path: 'https://drive.google.com/file/d/1PwxVjkbZeD6B1d34z8BykZ0dzQ1tW6q1/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 8',
                        path: 'https://drive.google.com/file/d/1Ivgzk17OfEXdkhyKz45RkfNovigBfJdP/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 9',
                        path: 'https://drive.google.com/file/d/1bJlpYUuIkvHpuu3R6BIhI4a_VHmofHum/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 10',
                        path: 'https://drive.google.com/file/d/14_Tq7fYpYs6LgK8oZQN3QxWqh5V0n_C0/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 11',
                        path: 'https://drive.google.com/file/d/1sp1wAzNbgRhTj7IPcWjTQq3YJcXFOZfA/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 12',
                        path: 'https://drive.google.com/file/d/1uNlIXB8Kvuf_xIgOZAbFry1R3nUYGaa3/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 13',
                        path: 'https://drive.google.com/file/d/1XVLe-BD29Q5dJG0P0nFSv-MtH5dy6Jn6/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Brand Ad Link 14',
                        path: 'https://drive.google.com/file/d/1syRlQW2xpI7JPbKURc5SIoHqaNc7I_wV/view?usp=sharing',
                        type: 'gdrive'
                    }
                ]
            },
            {
                id: 'brand-collateral',
                title: 'Brand Collateral',
                category: 'Marketing Materials',
                thumbnail: '',
                files: [
                    {
                        name: 'PhonePe SandBox Project',
                        path: 'https://docs.google.com/presentation/d/1qQpL_erNgam9pBWU34gHV7j3pipXQEab/edit?usp=sharing&ouid=117951035039527866531&rtpof=true&sd=true',
                        type: 'gdrive'
                    },
                    {
                        name: 'Bira 91 Sales Deck',
                        path: 'https://drive.google.com/file/d/15US71DQDav-vhAfy0YE60AzbaOZD1As9/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Explorex Tri-fold Brochure',
                        path: 'https://drive.google.com/file/d/1dy4bFVDmykW1cATMSLxKhuC-AmdaPFj3/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Explorex Sales Deck',
                        path: 'https://drive.google.com/file/d/15tQKrIsIEKClKQpvXctSVuXM8NRw_5cf/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Anupam Kher Kids Workshop Banner',
                        path: 'https://drive.google.com/file/d/1GrIov7k55kW8uLEemWIiRL3dqsXM6ORU/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'AI Generated Brand Poster',
                        path: 'https://drive.google.com/file/d/1dKnE2X2G3Lr5AtkR8to113Zy9usG9x0B/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Explorex Sales Deck',
                        path: 'https://drive.google.com/file/d/1uQIw4KTxBGiFV4U2JoCbiqhaVXXRnoZi/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Explorex Tri-fold Brochure',
                        path: 'https://drive.google.com/file/d/1MdRQ4YnVOeVWXgLJfmzp0nikJZmB1Gup/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'Actor Prepares Website Banner',
                        path: 'https://drive.google.com/file/d/1cO6Aw5OrYEOHbmaED9DaUsHIWz2G6vhU/view?usp=sharing',
                        type: 'gdrive'
                    }
                ]
            },
            {
                id: 'on-ground-events',
                title: 'Events',
                category: 'Event Production',
                thumbnail: '',
                files: [
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1PHTkK7cVc33b2exVVIETKcpjH2pByez1/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1M0qKbxMDTIVfLejsr3C3ayh7uPi7yPEW/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1VEbc5kq4nNMf_AMdspLJhyMeyOnsiP16/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1XGkWwOlPOoxubTbKimo5Qco6mgBBX1L8/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1L4L3t0Klrv8u0Sr0btv3x8WMVfds8lfc/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1VeFzmSGPcT4fd2JrY_vMOLeMkmmNRjEo/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1grc7jcC01BHdN2-ObO98qTUhI1SI9LRP/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1lKa8SrcGiubQWb0GhZLwGCvKC81a3dq_/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1ZW5ue0-dOt_vAJUaRPAGKnaEDuv8r5BQ/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'TechSparks 2023',
                        path: 'https://drive.google.com/file/d/1tzzhag_9M8ddJVmlNPN__EstJIqdC6LO/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'WOH Title Sponsorship',
                        path: 'https://drive.google.com/file/d/17pHrYKFIpWe3VTu3DrjP1WPwpaPBsds9/view?usp=sharing',
                        type: 'gdrive'
                    },
                    {
                        name: 'WOH Title Sponsorship',
                        path: 'https://www.instagram.com/p/Ctg_MqpJXIr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
                        type: 'gdrive'
                    },
                    {
                        name: 'WOH 2022',
                        path: 'https://drive.google.com/file/d/1rLnlm13hzYUISNe4Tj7IfHDAUUe0uAuv/view?usp=sharing',
                        type: 'gdrive'
                    }
                ]
            },
            {
                id: 'pr-activity',
                title: 'PR Activity',
                category: 'Public Relations',
                thumbnail: '',
                files: [
                    {
                        name: 'PR Press Coverage',
                        path: 'https://drive.google.com/drive/folders/15ZWSSvs2uHdiFrJqeC4t9Ujf5sLktG4Z?usp=sharing',
                        type: 'gdrive'
                    }
                ]
            }
        ];

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
