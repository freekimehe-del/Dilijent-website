import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptSms: false,
    acceptEmail: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      acceptSms: false,
      acceptEmail: false,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 uppercase">
            CONTACT <span className="text-primary">US</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Let Us Help Your Business To Move Forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-gray-900 mb-1 text-lg">Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5900 Balcones Drive, STE 14634<br />
                  Austin, TX 78731
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-gray-900 mb-1 text-lg">Email Us</h4>
                <a href="mailto:sales@dilijentsystems.com" className="text-gray-600 text-sm hover:text-primary transition-colors">
                  sales@dilijentsystems.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-gray-900 mb-1 text-lg">Call Us</h4>
                <a href="tel:+15125754630" className="text-gray-600 text-sm hover:text-primary transition-colors">
                  +1 (512)-575-4630
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:border-primary h-12 transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:border-primary h-12 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Telephone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:border-primary h-12 transition-colors"
                />
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:border-primary h-12 transition-colors"
                />
              </div>
              <Textarea
                placeholder="Message Details"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                required
                className="bg-gray-50 border-gray-200 focus:bg-white focus:border-primary min-h-[150px] transition-colors"
              />

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="sms"
                    checked={formData.acceptSms}
                    onCheckedChange={(checked) => setFormData({ ...formData, acceptSms: checked as boolean })}
                  />
                  <label htmlFor="sms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to be contacted by Dilijent Systems via text messages/SMS. To opt out, you can reply stop at any time. For more information, see our <a href="#" className="text-primary hover:underline">privacy policy</a>.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="email"
                    checked={formData.acceptEmail}
                    onCheckedChange={(checked) => setFormData({ ...formData, acceptEmail: checked as boolean })}
                  />
                  <label htmlFor="email" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to be contacted by Dilijent Systems via call and email. For more information, see our <a href="#" className="text-primary hover:underline">privacy policy</a>.
                  </label>
                </div>
              </div>

              <Button type="submit" variant="default" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
