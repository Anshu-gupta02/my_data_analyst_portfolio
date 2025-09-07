import { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      if (form.current) {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        if (result.text === 'OK') {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guptaanshu375@gmail.com',
      href: 'mailto:guptaanshu375@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7667030633',
      href: 'tel:+917667030633',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Patna, Bihar',
      href: 'https://www.google.com/maps/place/Patna,+Bihar',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anshu-gupta-1078761ab',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Anshu-gupta02',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/anshu_gupta_meet?igsh=MWc5ZWh1aGw3a2Fncw%3D%3D',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              If you're a recruiter or want to collaborate, feel free to reach out. 
              I'm always open to discussing new opportunities and exciting projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border shadow-card-shadow">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="from_name"
                        placeholder="Your Name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Input
                        name="from_email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border text-sm sm:text-base"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none text-sm sm:text-base"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-all duration-300 hover:shadow-glow text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-gradient-card border-border shadow-card-shadow">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-300 font-medium break-all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-foreground font-medium break-all">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-gradient-card border-border shadow-card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                    Connect with Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        asChild
                        variant="outline"
                        size="icon"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-card border-border shadow-card-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
                    <p className="text-sm sm:text-base text-foreground font-medium">Available for Work</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                      Currently seeking new opportunities in data analysis and business intelligence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;