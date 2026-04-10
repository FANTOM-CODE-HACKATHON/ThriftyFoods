// THRIFTY FOODS - Main Application Logic

// Page Templates
const pages = {
    home: `
        <div class="bg-white">
            <!-- Hero Section -->
            <section class="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Fighting Hunger, <span class="text-green-600">Reducing Waste</span>
                            </h1>
                            <p class="text-lg text-gray-600 mb-8">
                                Join the movement to redistribute surplus food safely. Connect restaurants, donors, NGOs, volunteers, and shelters on one sustainable platform.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="#get-started" class="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors">
                                    Get Started
                                    <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </a>
                                <a href="#about" class="inline-flex items-center justify-center border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors">
                                    Learn More
                                </a>
                            </div>
                            <!-- Stats -->
                            <div class="grid grid-cols-3 gap-6 mt-12">
                                <div>
                                    <div class="text-3xl font-bold text-green-600 stat-number">50K+</div>
                                    <div class="text-sm text-gray-600">Meals Saved</div>
                                </div>
                                <div>
                                    <div class="text-3xl font-bold text-green-600 stat-number">1,200+</div>
                                    <div class="text-sm text-gray-600">Partners</div>
                                </div>
                                <div>
                                    <div class="text-3xl font-bold text-green-600 stat-number">30+</div>
                                    <div class="text-sm text-gray-600">Cities</div>
                                </div>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1744870416768-25139537d856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZvb2QlMjBkb25hdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzI5NDE0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Food donation" class="w-full h-[500px] object-cover">
                            </div>
                            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
                                <div class="flex items-center space-x-4">
                                    <div class="bg-green-100 p-3 rounded-full">
                                        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="text-2xl font-bold text-gray-900">98%</div>
                                        <div class="text-sm text-gray-600">Food Safety Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- How It Works -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How THRIFTY FOODS Works</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">A simple, safe, and sustainable solution to connect surplus food with those who need it most.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow card-hover">
                            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Donate Surplus Food</h3>
                            <p class="text-gray-600">Restaurants, events, and individuals list available surplus food on our platform with details about quantity and pickup times.</p>
                        </div>
                        <div class="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow card-hover">
                            <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                                <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Connect & Coordinate</h3>
                            <p class="text-gray-600">NGOs, volunteers, and shelters receive notifications and coordinate safe pickup and delivery of donated food.</p>
                        </div>
                        <div class="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow card-hover">
                            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Feed Communities</h3>
                            <p class="text-gray-600">Surplus food reaches those in need quickly and safely, reducing waste while fighting hunger in local communities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- User Types -->
            <section class="py-20 bg-gradient-to-br from-gray-50 to-green-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Who Can Participate?</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Our platform connects diverse stakeholders in the food ecosystem</p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${generateUserTypeCards()}
                    </div>
                </div>
            </section>

            <!-- Impact Section -->
            <section class="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 class="text-3xl sm:text-4xl font-bold mb-6">Making a Real Impact Together</h2>
                            <p class="text-lg text-green-50 mb-8">Every meal saved is a step toward a more sustainable future. Join thousands of partners who are making a difference in their communities.</p>
                            <div class="grid grid-cols-2 gap-6">
                                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <div class="text-3xl font-bold mb-2">40%</div>
                                    <div class="text-green-50">Less Food Waste</div>
                                </div>
                                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <div class="text-3xl font-bold mb-2">25K+</div>
                                    <div class="text-green-50">People Fed Monthly</div>
                                </div>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1770921457314-ddcf8a2a4289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwc2VydmluZyUyMG1lYWxzfGVufDF8fHx8MTc3Mjk0MTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080" alt="Volunteers serving meals" class="w-full h-[400px] object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
                    <p class="text-lg text-gray-600 mb-8">Join THRIFTY FOODS today and be part of the solution to food waste and hunger.</p>
                    <a href="#get-started" class="inline-flex items-center justify-center bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-colors text-lg">
                        Get Started Now
                        <svg class="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    `,
    map:
    `
    <!-- Map Section -->
    <div class="bg-white">
<section id="donate-map" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Find a Place To Donate</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Find nearby NGOs and shelters to donate food. Every meal counts.
        </p>
      </div>
  
      <div class="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <div id="map" class="w-full" style="height: 520px;"></div>
      </div>
    </div>
  </section>
  </div>
    `,
    about: `
        <div class="bg-white">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto">
                        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About THRIFTY FOODS</h1>
                        <p class="text-xl text-gray-600">A sustainable platform dedicated to reducing food waste and fighting hunger through community-driven food redistribution.</p>
                    </div>
                </div>
            </section>

            <!-- Mission & Vision -->
            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div class="order-2 lg:order-1">
                            <div class="rounded-2xl overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1593079323074-f1d77349c998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZvb2QlMjBzaGFyaW5nfGVufDF8fHx8MTc3Mjk0MTQwNHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Sustainable food sharing" class="w-full h-[400px] object-cover">
                            </div>
                        </div>
                        <div class="order-1 lg:order-2">
                            <div class="flex items-center space-x-3 mb-6">
                                <div class="bg-green-100 p-3 rounded-lg">
                                    <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h2 class="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p class="text-lg text-gray-600 mb-6">To create a world where no food goes to waste while people go hungry. We connect surplus food from restaurants, events, and donors with communities in need through a safe, efficient, and sustainable platform.</p>
                            <p class="text-gray-600">By leveraging technology and community partnerships, we're building a circular food economy that benefits everyone—from donors who reduce waste to recipients who receive nutritious meals.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="flex items-center space-x-3 mb-6">
                                <div class="bg-blue-100 p-3 rounded-lg">
                                    <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                                <h2 class="text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p class="text-lg text-gray-600 mb-6">A future where food redistribution is seamlessly integrated into every community, creating a sustainable ecosystem where surplus food automatically reaches those who need it most.</p>
                            <p class="text-gray-600">We envision cities where food waste is virtually eliminated through smart coordination, and no one in our communities experiences food insecurity.</p>
                        </div>
                        <div>
                            <div class="rounded-2xl overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1630858332927-a976909650d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFuayUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzI5NDE0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Food bank community" class="w-full h-[400px] object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Values -->
            <section class="py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${generateValueCards()}
                    </div>
                </div>
            </section>

            <!-- Impact Stats -->
            <section class="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
                        <p class="text-xl text-green-50">Real numbers, real change</p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        ${generateImpactStats()}
                    </div>
                </div>
            </section>
        </div>
    `,

    'get-started': `
        <div class="bg-white">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto">
                        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Join THRIFTY FOODS</h1>
                        <p class="text-xl text-gray-600">Choose how you'd like to participate in reducing food waste and fighting hunger in your community.</p>
                    </div>
                </div>
            </section>

            <!-- User Type Selection -->
            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">How Would You Like to Help?</h2>
                        <p class="text-lg text-gray-600">Select your role to get started</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" id="user-type-selection">
                        ${generateGetStartedCards()}
                    </div>
                    <div id="selected-benefits" class="hidden"></div>
                </div>
            </section>

            <!-- How to Get Started -->
            <section class="py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Simple Steps to Get Started</h2>
                        <p class="text-lg text-gray-600">Join our community in just a few minutes</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        ${generateSteps()}
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div class="space-y-6">
                        ${generateFAQs()}
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
                    <p class="text-xl text-green-50 mb-8">Join thousands of partners fighting food waste and hunger.</p>
                    <a href="/register" class="inline-flex items-center justify-center bg-white text-green-600 px-10 py-4 rounded-full hover:bg-green-50 transition-colors text-lg font-semibold">
                        Create Your Account
                        <svg class="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    `,

    contact: `
        <div class="bg-white">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto">
                        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
                        <p class="text-xl text-gray-600">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <!-- Contact Form -->
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            <form id="contact-form" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="John Doe">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="john@example.com">
                                </div>
                                <div>
                                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select id="subject" name="subject" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition">
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="donation">Food Donation</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="volunteer">Volunteer Opportunities</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea id="message" name="message" required rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none" placeholder="Tell us how we can help you..."></textarea>
                                </div>
                                <button type="submit" class="w-full inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors">
                                    Send Message
                                    <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>

                        <!-- Contact Information -->
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <p class="text-gray-600 mb-8">Reach out to us through any of these channels. We're here to help!</p>
                            ${generateContactInfo()}
                            <!-- Image -->
                            <div class="rounded-xl overflow-hidden shadow-lg mt-8">
                                <img src="https://images.unsplash.com/photo-1640665636887-0c4ddd38859e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcyOTQxNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Fresh vegetables" class="w-full h-[300px] object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Office Hours -->
            <section class="py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Office Hours</h2>
                        <p class="text-lg text-gray-600">We're available to help during these hours</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        ${generateOfficeHours()}
                    </div>
                </div>
            </section>
        </div>
    `
};

// Helper Functions
function generateUserTypeCards() {
    const userTypes = [
        { icon: '🏢', title: 'Restaurants', desc: 'Share surplus food at the end of service', color: 'bg-orange-500' },
        { icon: '🎉', title: 'Event Organizers', desc: 'Donate leftover food from events and catering', color: 'bg-blue-500' },
        { icon: '❤️', title: 'Individual Donors', desc: 'Contribute excess food from home', color: 'bg-red-500' },
        { icon: '🤝', title: 'NGOs', desc: 'Coordinate large-scale food distribution', color: 'bg-purple-500' },
        { icon: '👥', title: 'Volunteers', desc: 'Help with pickup and delivery logistics', color: 'bg-green-500' },
        { icon: '🏠', title: 'Shelters', desc: 'Receive food for those in need', color: 'bg-indigo-500' }
    ];

    return userTypes.map(type => `
        <div class="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 card-hover">
            <div class="${type.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl">
                ${type.icon}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">${type.title}</h3>
            <p class="text-gray-600 text-sm">${type.desc}</p>
        </div>
    `).join('');
}

function generateValueCards() {
    const values = [
        { icon: '🌱', title: 'Sustainability', desc: 'Environmental responsibility is at the heart of our platform. Every meal saved reduces waste and carbon footprint.', color: 'bg-green-500' },
        { icon: '👥', title: 'Community', desc: 'We believe in the power of communities working together. Connection and collaboration make our mission possible.', color: 'bg-blue-500' },
        { icon: '❤️', title: 'Compassion', desc: 'Driven by empathy and care for those in need. Every action we take is guided by compassion and human dignity.', color: 'bg-red-500' }
    ];

    return values.map(value => `
        <div class="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow card-hover">
            <div class="${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-3xl">
                ${value.icon}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">${value.title}</h3>
            <p class="text-gray-600">${value.desc}</p>
        </div>
    `).join('');
}

function generateImpactStats() {
    const stats = [
        { icon: '🏆', number: '50,000+', label: 'Meals Redistributed' },
        { icon: '👥', number: '1,200+', label: 'Active Partners' },
        { icon: '🌱', number: '40%', label: 'Waste Reduction' },
        { icon: '❤️', number: '25K+', label: 'People Fed Monthly' }
    ];

    return stats.map(stat => `
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div class="text-5xl mb-4">${stat.icon}</div>
            <div class="text-4xl font-bold mb-2">${stat.number}</div>
            <div class="text-green-50">${stat.label}</div>
        </div>
    `).join('');
}

function generateGetStartedCards() {
    const types = [
        {
            id: 'donor',
            icon: '🏢',
            title: 'I Want to Donate',
            desc: 'Restaurant, event organizer, or individual with surplus food',
            gradient: 'from-blue-500 to-blue-600',
            benefits: [
                'Reduce food waste and environmental impact',
                'Tax deductions for eligible donations',
                'Build positive community reputation',
                'Simple pickup coordination'
            ],
            image: 'https://images.unsplash.com/photo-1763219805214-91fa634e6006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3Mjg1MzM4NHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            id: 'receiver',
            icon: '❤️',
            title: 'I Need Food',
            desc: 'Shelter, food bank, or community organization',
            gradient: 'from-green-500 to-green-600',
            benefits: [
                'Access to fresh, quality food donations',
                'Real-time notifications of available food',
                'Flexible pickup scheduling',
                'Direct connection with local donors'
            ],
            image: 'https://images.unsplash.com/photo-1630858332927-a976909650d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFuayUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzI5NDE0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            id: 'volunteer',
            icon: '🤝',
            title: 'I Want to Volunteer',
            desc: 'Help with food pickup and delivery logistics',
            gradient: 'from-purple-500 to-purple-600',
            benefits: [
                'Make a direct impact in your community',
                'Flexible volunteering hours',
                'Meet like-minded people',
                'Track your contribution impact'
            ],
            image: 'https://images.unsplash.com/photo-1770921457314-ddcf8a2a4289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwc2VydmluZyUyMG1lYWxzfGVufDF8fHx8MTc3Mjk0MTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        }
    ];

    return types.map(type => `
        <div class="user-type-card bg-white rounded-2xl p-8 border-2 border-gray-200 transition-all hover:shadow-xl" data-type="${type.id}" data-benefits='${JSON.stringify(type.benefits)}' data-image="${type.image}">
            <div class="w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center mb-6 text-3xl">
                ${type.icon}
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">${type.title}</h3>
            <p class="text-gray-600">${type.desc}</p>
        </div>
    `).join('');
}

function generateSteps() {
    const steps = [
        { step: '1', title: 'Create Account', desc: 'Sign up with your email and basic information' },
        { step: '2', title: 'Verify Profile', desc: 'Complete verification for safety and trust' },
        { step: '3', title: 'Set Preferences', desc: 'Configure your location and availability' },
        { step: '4', title: 'Start Helping', desc: 'Begin donating, receiving, or volunteering' }
    ];

    return steps.map((item, index) => `
        <div class="relative">
            <div class="bg-white rounded-xl p-6 text-center h-full">
                <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    ${item.step}
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${item.title}</h3>
                <p class="text-gray-600 text-sm">${item.desc}</p>
            </div>
            ${index < 3 ? '<div class="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300">→</div>' : ''}
        </div>
    `).join('');
}

function generateFAQs() {
    const faqs = [
        {
            q: 'Is there a cost to join THRIFTY FOODS?',
            a: 'No, THRIFTY FOODS is completely free for all users. We believe in making food redistribution accessible to everyone.'
        },
        {
            q: 'How do you ensure food safety?',
            a: 'We follow strict food safety guidelines. All donors are verified, and we provide clear guidelines on proper food handling, storage, and transportation. We only accept food that meets safety standards.'
        },
        {
            q: 'What types of food can be donated?',
            a: 'We accept surplus prepared meals, packaged foods, fresh produce, and baked goods. All food must be fresh, properly stored, and safe for consumption. We do not accept expired items.'
        },
        {
            q: 'How quickly is food redistributed?',
            a: 'Our real-time notification system ensures that receivers and volunteers are alerted immediately when food becomes available. Most pickups are coordinated within hours of posting.'
        }
    ];

    return faqs.map(faq => `
        <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">${faq.q}</h3>
            <p class="text-gray-600">${faq.a}</p>
        </div>
    `).join('');
}

function generateContactInfo() {
    return `
        <div class="space-y-6 mb-8">
            <div class="flex items-start space-x-4">
                <div class="bg-green-100 p-3 rounded-lg">
                    <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
                    <p class="text-gray-600">KIT College<br>Kolhapur City, 416012<br>India</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <div class="bg-green-100 p-3 rounded-lg">
                    <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p class="text-sm text-gray-500 mt-1">+91 9226416891</p>
                    <p class="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm IST</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <div class="bg-green-100 p-3 rounded-lg">
                    <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                    <p class="text-gray-600">contact@thriftyfoods.org</p>
                    <p class="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
            </div>
        </div>
    `;
}

function generateOfficeHours() {
    const hours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    return hours.map(schedule => `
        <div class="bg-white rounded-lg p-6 text-center shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-2">${schedule.day}</h3>
            <p class="text-gray-600">${schedule.hours}</p>
        </div>
    `).join('');
}

// Router
function router() {
    const hash = window.location.hash.slice(1) || 'home';
    const app = document.getElementById('app');
    
    if (pages[hash]) {
        app.innerHTML = pages[hash];
        app.classList.add('fade-in');
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
            }
        });

        // Initialize page-specific functionality
        if (hash === 'get-started') {
            initializeGetStarted();
        } else if (hash === 'contact') {
            initializeContactForm();
        }else if(hash =='map'){
            InitializeMap();
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Initialize Get Started page functionality
function initializeGetStarted() {
    const cards = document.querySelectorAll('.user-type-card');
    const benefitsDiv = document.getElementById('selected-benefits');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            cards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Show benefits
            const benefits = JSON.parse(this.dataset.benefits);
            const image = this.dataset.image;
            const type = this.dataset.type;
            
            benefitsDiv.innerHTML = `
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 mt-8 fade-in">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
                            <ul class="space-y-4">
                                ${benefits.map(benefit => `
                                    <li class="flex items-start">
                                        <svg class="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span class="text-gray-700">${benefit}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <a href="/register" class="mt-4 mx-4 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 text-sm rounded-full hover:bg-green-700 transition-all active:scale-95">                                
                            Continue Registration
                                <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="rounded-xl overflow-hidden shadow-xl">
                            <img src="${image}" alt="Selected user type" class="w-full h-[400px] object-cover">
                        </div>
                    </div>
                </div>
            `;
            benefitsDiv.classList.remove('hidden');
        });
    });
}



// Initialize Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We\'ll get back to you soon.');
            form.reset();
        });
    }
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

//Initialize Map
function InitializeMap(){

  const map = L.map('map').setView([19.0760, 72.8777], 10);
  
  // OpenStreetMap tiles (best free option)
  L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=PFSJWPHUrAyFzdfMhDsT', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
  }).addTo(map);
  
  // Example donation points in Maharashtra
  const donationPoints = [
      {
          lat: 19.0760,
          lng: 72.8777,
          name: "Help Foundation",
          desc: "Mumbai Central - Food Donation Point"
      },
      {
          lat: 18.5204,
          lng: 73.8567,
          name: "Akshaya Patra Foundation",
          desc: "Pune - NGO Kitchen"
      },
      {
          lat: 19.9975,
          lng: 73.7898,
          name: "Nashik Food Bank",
          desc: "Daily donation drive"
      },
      {
          lat: 21.1458,
          lng: 79.0882,
          name: "Nagpur Helpline",
          desc: "Shelter & Food Distribution"
      }
  ];
  
  donationPoints.forEach(point => {
      L.marker([point.lat, point.lng])
          .addTo(map)
  });
  

}


// Initialize app
window.addEventListener('hashchange', router);
window.addEventListener('load', function() {
    router();
    initializeMobileMenu();
});
