import { ArrowUp, Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const footerLinks = ['Home', 'About', 'Projects', 'Certifications', 'Contact'];
	
	const socialLinks = [
		{ icon: Github, label: 'GitHub', href: 'https://github.com/Anshu-gupta02' },
		{ icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anshu-gupta-1078761ab' },
		{ icon: Mail, label: 'Email', href: 'mailto:guptaanshu375@gmail.com' },
	];

	return (
		<footer className="bg-gradient-to-b from-background to-card border-t border-border relative">
			{/* Decorative gradient accent */}
			<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-80"></div>
			
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
				<div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
				
				{/* Grid overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25"></div>
			</div>
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
				>
					{/* Brand Section */}
					<div className="flex flex-col space-y-4">
						<div className="flex items-center space-x-3">
							<div className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500 animate-pulse"></div>
								<img
									src="/logo.png"
									alt="Logo"
									className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md relative z-10"
								/>
							</div>
							<span className="font-bold text-lg sm:text-xl">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Anshu Gupta</span>
							</span>
						</div>
						<p className="text-muted-foreground text-sm max-w-md">
							Data Analyst & Power BI Developer with expertise in transforming complex data into actionable insights.
						</p>
						<div className="flex space-x-4 pt-2">
							<TooltipProvider>
								{socialLinks.map((social) => (
									<Tooltip key={social.label}>
										<TooltipTrigger asChild>
											<motion.a 
												href={social.href} 
												target="_blank" 
												rel="noopener noreferrer" 
												className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.95 }}
											>
												<social.icon className="w-5 h-5" />
											</motion.a>
										</TooltipTrigger>
										<TooltipContent>
											<p>{social.label}</p>
										</TooltipContent>
									</Tooltip>
								))}
							</TooltipProvider>
						</div>
					</div>

					{/* Quick Links */}
					<div className="flex flex-col space-y-4">
						<h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Quick Links</h3>
						<nav className="flex flex-col space-y-3">
							{footerLinks.map((item) => (
								<motion.button
									key={item}
									onClick={() => {
										const element = document.querySelector(
											`#${item.toLowerCase()}`
										);
										element?.scrollIntoView({ behavior: 'smooth' });
									}}
									className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center w-fit group"
									whileHover={{ x: 5 }}
								>
									<span className="relative">
										{item}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
									</span>
									<ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
								</motion.button>
							))}
						</nav>
					</div>

					{/* Quote and Back to Top */}
					<div className="flex flex-col space-y-4">
						<h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Get in Touch</h3>
						<p className="text-sm text-muted-foreground">
							Let's collaborate on your next data project.
						</p>
						<div className="mt-2">
							<blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground relative">
								<div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
								"Data is not just numbers; it's the story waiting to be told."
							</blockquote>
						</div>
						
						<div className="flex justify-start mt-auto pt-2">
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									onClick={scrollToTop}
									variant="outline"
									size="sm"
									className="border-primary/50 hover:border-primary text-primary hover:bg-primary/10 transition-all duration-300 rounded-full group"
								>
									<span>Back to top</span>
									<ArrowUp className="w-4 h-4 ml-1 group-hover:translate-y-[-2px] transition-transform" />
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.div>

				<Separator className="my-6 opacity-30" />

				{/* Copyright Section */}
				<motion.div 
					className="flex flex-col sm:flex-row justify-between items-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<p className="text-xs text-muted-foreground order-2 sm:order-1 mt-4 sm:mt-0">
						© {currentYear} Anshu Gupta. All rights reserved.
					</p>
					
					<p className="text-xs sm:text-sm text-muted-foreground flex items-center order-1 sm:order-2">
						<span>Made with</span>
						<Heart className="w-3 h-3 mx-1 text-red-500 animate-pulse" />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">by Anshu Gupta</span>
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;