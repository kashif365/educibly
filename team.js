 const blogData = {
            1: [
                {
                    title: "How to Write a Term Paper",
                    excerpt: "This guide to writing a term paper gives some simple and practical advice: how to get started, how to get organized, how to break down the huge task into less... Read More",
                    category: "Essay Writing Guides",
                    blogLabel: "Blog",
                    date: "April 18, 2023",
                    readTime: "8 min read",
                    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                    title: "Business Essay and the Best Way of Its Writing",
                    excerpt: "Business is an essential aspect of today's evolving world. It is a lucrative industry that impacts many sectors, including education. Business-related courses are popular as many students are pursuing the... Read More",
                    category: "Academic Writing Tips",
                    blogLabel: "Blog",
                    date: "March 4, 2022",
                    readTime: "29 min read",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                    title: "10 Essential Essay Writing Tips for Students",
                    excerpt: "Master the art of essay writing with these proven strategies. From crafting compelling introductions to structuring your arguments effectively, these tips will elevate your academic writing... Read More",
                    category: "Essay Tips&Tricks",
                    blogLabel: "Blog",
                    date: "May 15, 2023",
                    readTime: "12 min read",
                    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                    title: "Research Methods Every Student Should Know",
                    excerpt: "Discover the fundamental research methods that will strengthen your academic papers. Learn how to conduct effective literature reviews, gather reliable sources, and analyze data... Read More",
                    category: "Academic Writing Tips",
                    blogLabel: "Blog",
                    date: "June 2, 2023",
                    readTime: "18 min read",
                    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                    title: "Understanding Citation Styles: APA, MLA, and Chicago",
                    excerpt: "Navigate the world of academic citations with confidence. This comprehensive guide breaks down the major citation styles and provides practical examples for each format... Read More",
                    category: "Essay Writing Guides",
                    blogLabel: "Blog",
                    date: "April 28, 2023",
                    readTime: "15 min read",
                    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                    title: "Academic Success in the Digital Age",
                    excerpt: "Explore how technology is reshaping education and learn strategies for academic success in today's digital learning environment. From online collaboration to digital literacy... Read More",
                    category: "Essay News",
                    blogLabel: "Blog",
                    date: "May 22, 2023",
                    readTime: "11 min read",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
            ],
            2: [
                {
                    title: "Advanced Grammar Rules for Academic Writing",
                    excerpt: "Elevate your writing with these advanced grammar concepts that will make your academic papers stand out. Learn about complex sentence structures and professional writing techniques... Read More",
                    category: "Academic Writing Tips",
                    blogLabel: "Blog",
                    date: "June 15, 2023",
                    readTime: "14 min read",
                    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                    title: "The Art of Persuasive Essay Writing",
                    excerpt: "Learn the secrets of crafting compelling persuasive arguments that convince your readers. Discover rhetorical strategies, evidence presentation, and counterargument techniques... Read More",
                    category: "Essay Tips&Tricks",
                    blogLabel: "Blog",
                    date: "June 8, 2023",
                    readTime: "16 min read",
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
            ]
        };

        // Pagination functionality
        let currentPage = 1;
        const totalPages = 5;
        const totalPosts = 30;

        function loadPageContent(page) {
            const blogContent = document.getElementById('blog-content');
            const pageData = blogData[page] || blogData[1];
            
            blogContent.innerHTML = '';
            
            pageData.forEach(post => {
                const blogItem = document.createElement('div');
                blogItem.className = 'blog-item';
                blogItem.innerHTML = `
                    <div class="blog-content">
                        <h2 class="blog-title">
                            <a href="#">${post.title}</a>
                        </h2>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <ul class="blog-meta">
                            <li>${post.category}</li>
                            <li>${post.blogLabel}</li>
                            <li>${post.date}</li>
                            <li>${post.readTime}</li>
                        </ul>
                    </div>
                    <div class="blog-image">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                `;
                blogContent.appendChild(blogItem);
            });
        }

        function updatePagination() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            // Previous button  
            const prevItem = document.createElement('li');
            prevItem.className = 'pagination-item';
            const prevLink = document.createElement('a');
            prevLink.href = '#';
            prevLink.className = `pagination-link ${currentPage === 1 ? 'disabled' : ''}`;
            prevLink.innerHTML = '‹';
            prevLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    updatePagination();
                    loadPageContent(currentPage);
                }
            });
            prevItem.appendChild(prevLink);
            pagination.appendChild(prevItem);

            // Page numbers (simplified - just show first few pages)
            for (let i = 1; i <= Math.min(3, totalPages); i++) {
                const pageItem = document.createElement('li');
                pageItem.className = `pagination-item ${i === currentPage ? 'active' : ''}`;
                
                const pageLink = document.createElement('a');
                pageLink.href = '#';
                pageLink.className = 'pagination-link';
                pageLink.textContent = i;
                
                pageLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    updatePagination();
                    loadPageContent(currentPage);
                });
                
                pageItem.appendChild(pageLink);
                pagination.appendChild(pageItem);
            }

            // Show dots if there are more pages
            if (totalPages > 3) {
                const dotsItem = document.createElement('li');
                dotsItem.className = 'pagination-item';
                const dotsLink = document.createElement('a');
                dotsLink.href = '#';
                dotsLink.className = 'pagination-link';
                dotsLink.innerHTML = '»';
                dotsLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                        currentPage++;
                        updatePagination();
                        loadPageContent(currentPage);
                    }
                });
                dotsItem.appendChild(dotsLink);
                pagination.appendChild(dotsItem);
            }

            // Update page info
            document.getElementById('current-page-info').textContent = currentPage;
            document.getElementById('total-pages-info').textContent = totalPages;
            document.getElementById('total-posts-info').textContent = totalPosts;
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                currentPage = 1;
                updatePagination();
                loadPageContent(currentPage);
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            updatePagination();
            loadPageContent(currentPage);
        });