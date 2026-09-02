"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Menu,
  X,
  Leaf,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Apple,
  Salad,
  Pill,
  CalendarCheck,
  BookOpen,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  Target,
  Sparkles,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Productos', href: '#products' },
    { label: 'Planes', href: '#pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '#contact' }
  ]

  const stats = [
    { value: '15K+', label: 'Clientes satisfechos' },
    { value: '98%', label: 'Ingredientes orgánicos' },
    { value: '200+', label: 'Recetas saludables' },
    { value: '50+', label: 'Suplementos naturales' }
  ]

  const services = [
    {
      icon: Salad,
      title: 'Planes de Alimentación',
      description: 'Menús semanales personalizados según tus objetivos nutricionales y preferencias alimentarias.',
      link: '#pricing'
    },
    {
      icon: Pill,
      title: 'Suplementos Naturales',
      description: 'Vitaminas, minerales y superalimentos de origen orgánico certificado para complementar tu dieta.',
      link: '#products'
    },
    {
      icon: CalendarCheck,
      title: 'Consultas Nutricionales',
      description: 'Sesiones personalizadas con nutricionistas certificados para diseñar tu camino hacia el bienestar.',
      link: '#contact'
    },
    {
      icon: BookOpen,
      title: 'Recursos Educativos',
      description: 'Blog, recetas y guías gratuitas para que tomes decisiones informadas sobre tu alimentación.',
      link: '/blog'
    }
  ]

  const featuredProducts = [
    {
      name: 'Proteína Vegetal Premium',
      category: 'Suplementos',
      description: 'Mezcla de proteínas de guisante, arroz y cáñamo. Sin aditivos artificiales.',
      badge: 'Más vendido'
    },
    {
      name: 'Greens Superfood',
      category: 'Superalimentos',
      description: 'Concentrado de espirulina, chlorella y vegetales verdes orgánicos.',
      badge: 'Nuevo'
    },
    {
      name: 'Omega 3 Vegano',
      category: 'Vitaminas',
      description: 'Aceite de algas rico en DHA y EPA. Sostenible y libre de metales pesados.',
      badge: 'Orgánico'
    }
  ]

  const features = [
    {
      icon: Target,
      title: 'Quiz Nutricional Personalizado',
      description: 'Descubre exactamente qué necesita tu cuerpo con nuestro cuestionario de 5 minutos basado en ciencia.'
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento de Progreso',
      description: 'Dashboard personal para monitorear tus metas, hábitos alimenticios y resultados de salud.'
    },
    {
      icon: Heart,
      title: 'Recetas Adaptadas',
      description: 'Biblioteca de más de 200 recetas filtradas por tus restricciones dietéticas y preferencias.'
    },
    {
      icon: Award,
      title: 'Certificación Orgánica',
      description: 'Todos nuestros productos cuentan con certificación de agricultura orgánica verificada.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Completa el Quiz',
      description: 'Responde preguntas sobre tu estilo de vida, objetivos y preferencias alimentarias.'
    },
    {
      step: '02',
      title: 'Recibe tu Plan',
      description: 'Obtén recomendaciones personalizadas de suplementos, recetas y plan alimenticio.'
    },
    {
      step: '03',
      title: 'Consulta con Expertos',
      description: 'Agenda una sesión con nuestros nutricionistas para afinar tu estrategia.'
    },
    {
      step: '04',
      title: 'Transforma tu Vida',
      description: 'Sigue tu progreso y ajusta tu plan mientras alcanzas tus metas de bienestar.'
    }
  ]

  const testimonials = [
    {
      quote: 'GreenLife cambió completamente mi relación con la comida. Los planes son fáciles de seguir y los suplementos realmente se sienten diferentes.',
      author: 'Cliente verificada',
      role: 'Suscriptora Plan Óptimo',
      rating: 5
    },
    {
      quote: 'Como deportista, necesitaba nutrición de calidad sin complicaciones. Aquí encontré todo en un solo lugar con asesoría experta.',
      author: 'Cliente verificado',
      role: 'Suscriptor Plan Premium',
      rating: 5
    },
    {
      quote: 'La consulta nutricional me abrió los ojos. Ahora entiendo qué necesita mi cuerpo y tengo energía todo el día.',
      author: 'Cliente verificada',
      role: 'Cliente de Consultoría',
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: 'Esencial',
      description: 'Perfecto para comenzar tu viaje de bienestar',
      features: [
        'Plan alimenticio semanal básico',
        'Acceso a recetas premium',
        'Newsletter con tips exclusivos',
        'Descuentos en tienda online'
      ],
      highlighted: false
    },
    {
      name: 'Óptimo',
      description: 'Nuestro plan más popular para resultados visibles',
      features: [
        'Todo del plan Esencial',
        'Menús personalizados semanales',
        'Una consulta mensual incluida',
        'Seguimiento de progreso',
        'Lista de compras automatizada'
      ],
      highlighted: true
    },
    {
      name: 'Premium',
      description: 'Transformación completa con soporte dedicado',
      features: [
        'Todo del plan Óptimo',
        'Consultas ilimitadas',
        'Suplementos mensuales incluidos',
        'Soporte prioritario WhatsApp',
        'Acceso anticipado a productos'
      ],
      highlighted: false
    }
  ]

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(consultationForm)
        }
      )

      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#A8B89C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-[#2D5016]" />
              <span 
                className="text-xl font-bold text-[#2D5016]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                GreenLife
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#2C2C2C] hover:text-[#2D5016] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="#products">
                <Button variant="ghost" size="icon" className="text-[#2D5016]">
                  <ShoppingCart className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button 
                  className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white rounded-full px-6"
                >
                  Consulta Gratis
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 text-[#2D5016]"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 bg-[#F7F9F5] border-t border-[#A8B89C]/20">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block py-3 text-[#2C2C2C] hover:text-[#2D5016] font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMobileNavOpen(false)}>
              <Button 
                className="w-full mt-4 bg-[#2D5016] hover:bg-[#2D5016]/90 text-white rounded-full"
              >
                Consulta Gratis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Split */}
      <section id="hero" className="pt-20 lg:pt-24 bg-[#F7F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                Nutrición basada en ciencia
              </Badge>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-tight mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Alimenta tu vida con
                <span className="text-[#2D5016]"> decisiones simples</span>
              </h1>
              <p className="text-lg text-[#2C2C2C]/70 mb-8 leading-relaxed">
                Suplementos orgánicos, planes de alimentación personalizados y consultoría 
                experta en un solo lugar. Elimina la confusión y transforma tu bienestar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#pricing">
                  <Button 
                    size="lg"
                    className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white rounded-full px-8 w-full sm:w-auto"
                  >
                    Comenzar Ahora
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016]/5 rounded-full px-8 w-full sm:w-auto"
                  >
                    Conocer Más
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#A8B89C] border-2 border-white flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-[#2D5016]" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#2D5016] text-[#2D5016]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#2C2C2C]/60">15,000+ clientes felices</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden bg-[#A8B89C]/20">
                <Image
                  src="/images/feature.png"
                  alt="Nutrición saludable con alimentos frescos y orgánicos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-[#A8B89C]/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#2D5016]/10 flex items-center justify-center">
                    <Apple className="w-6 h-6 text-[#2D5016]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C]">100% Orgánico</p>
                    <p className="text-sm text-[#2C2C2C]/60">Certificación verificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#2D5016] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p 
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.value}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-4">
              Nuestros Servicios
            </Badge>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Todo lo que necesitas para tu bienestar
            </h2>
            <p className="text-[#2C2C2C]/70">
              Desde suplementos premium hasta asesoría personalizada, 
              cubrimos cada aspecto de tu nutrición.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group p-8 border-[#A8B89C]/20 hover:border-[#2D5016]/30 transition-all duration-300 hover:shadow-lg rounded-2xl"
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7F9F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D5016] transition-colors">
                    <service.icon className="w-7 h-7 text-[#2D5016] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-semibold text-[#2C2C2C] mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[#2C2C2C]/70 mb-4">{service.description}</p>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-[#2D5016] font-medium hover:gap-3 gap-2 transition-all"
                    >
                      Saber más <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 lg:py-28 bg-[#F7F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-4">
                Tienda Online
              </Badge>
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[#2C2C2C]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Productos Destacados
              </h2>
            </div>
            <Link href="/tienda" className="mt-4 lg:mt-0">
              <Button variant="outline" className="border-[#2D5016] text-[#2D5016] rounded-full">
                Ver Todos los Productos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white"
              >
                <div className="aspect-square relative bg-[#A8B89C]/10">
                  <Image
                    src="/images/feature.png"
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#2D5016] text-white">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#A8B89C] uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 
                    className="text-lg font-semibold text-[#2C2C2C] mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[#2C2C2C]/70 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#2D5016] font-semibold">Consultar precio</span>
                    <Button 
                      size="sm"
                      className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white rounded-full"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-4">
                Por qué Elegirnos
              </Badge>
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[#2C2C2C] mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Nutrición inteligente para tu estilo de vida
              </h2>
              <p className="text-[#2C2C2C]/70 mb-8">
                Combinamos ciencia nutricional con tecnología para ofrecerte 
                recomendaciones personalizadas que realmente funcionan.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F9F5] flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#2D5016]" />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-[#2C2C2C] mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#2C2C2C]/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#A8B89C]/20">
                <Image
                  src="/images/feature.png"
                  alt="Características de GreenLife Nutrition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-8 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2D5016]" />
                  <span className="font-medium text-[#2C2C2C]">Certificado Orgánico</span>
                </div>
              </div>
              <div className="absolute bottom-8 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2D5016]" />
                  <span className="font-medium text-[#2C2C2C]">Envío en 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-[#F7F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-4">
              Cómo Funciona
            </Badge>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Tu camino hacia el bienestar en 4 pasos
            </h2>
            <p className="text-[#2C2C2C]/70">
              Hemos simplificado el proceso para que puedas enfocarte en lo que importa: tu salud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <span 
                    className="text-6xl font-bold text-[#A8B89C]/30"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {step.step}
                  </span>
                  <h3 
                    className="text-xl font-semibold text-[#2C2C2C] mt-4 mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#2C2C2C]/70">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-16 h-px bg-[#A8B89C]" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#pricing">
              <Button 
                size="lg"
                className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white rounded-full px-8"
              >
                Comenzar Mi Transformación
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-4">
              Testimonios
            </Badge>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#2C2C2C]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#F7F9F5] rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2D5016] text-[#2D5016]" />
                ))}
              </div>
              <blockquote 
                className="text-xl lg:text-2xl text-[#2C2C2C] mb-8 leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#2C2C2C]">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#2C2C2C]/60">{testimonials[currentTestimonial].role}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={prevTestimonial}
                    className="rounded-full border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={nextTestimonial}
                    className="rounded-full border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#2D5016] w-6' : 'bg-[#A8B89C]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 lg:py-28 bg-[#F7F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#A8B89C]/30 text-[#2D5016] hover:bg-[#A8B89C]/40 mb-4">
              Planes de Suscripción
            </Badge>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Elige el plan perfecto para ti
            </h2>
            <p className="text-[#2C2C2C]/70">
              Todos los planes incluyen acceso a nuestra plataforma de recetas y contenido educativo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  plan.highlighted 
                    ? 'border-[#2D5016] bg-white shadow-xl scale-105' 
                    : 'border-[#A8B89C]/20 bg-white hover:border-[#2D5016]/30'
                }`}
              >
                {plan.highlighted && (
                  <Badge className="bg-[#2D5016] text-white mb-4">Más Popular</Badge>
                )}
                <h3 
                  className="text-2xl font-bold text-[#2C2C2C] mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p className="text-[#2C2C2C]/70 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-sm text-[#2C2C2C]/60">Desde</span>
                  <p className="text-3xl font-bold text-[#2D5016]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Consultar precio
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C2C2C]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact">
                  <Button 
                    className={`w-full rounded-full ${
                      plan.highlighted
                        ? 'bg-[#2D5016] hover:bg-[#2D5016]/90 text-white'
                        : 'bg-transparent border-2 border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white'
                    }`}
                  >
                    Solicitar Información
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full + Contact Form */}
      <section id="contact" className="py-20 lg:py-28 bg-[#2D5016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ¿Listo para transformar tu alimentación?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Agenda una consulta gratuita con nuestro equipo de nutricionistas. 
                Analizaremos tus objetivos y te recomendaremos el mejor camino hacia tu bienestar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a href="mailto:hola@greenlifenutrition.com" className="text-white hover:underline">
                    hola@greenlifenutrition.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Contactar por formulario</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#2D5016]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#2D5016]" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-[#2C2C2C] mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-[#2C2C2C]/70">
                    Nos pondremos en contacto contigo en las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultationSubmit}>
                  <h3 
                    className="text-2xl font-bold text-[#2C2C2C] mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Solicita tu consulta gratuita
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Nombre completo
                      </label>
                      <Input
                        type="text"
                        value={consultationForm.name}
                        onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
                        required
                        className="rounded-xl border-[#A8B89C]/30 focus:border-[#2D5016]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Correo electrónico
                      </label>
                      <Input
                        type="email"
                        value={consultationForm.email}
                        onChange={(e) => setConsultationForm({ ...consultationForm, email: e.target.value })}
                        required
                        className="rounded-xl border-[#A8B89C]/30 focus:border-[#2D5016]"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        Teléfono (opcional)
                      </label>
                      <Input
                        type="tel"
                        value={consultationForm.phone}
                        onChange={(e) => setConsultationForm({ ...consultationForm, phone: e.target.value })}
                        className="rounded-xl border-[#A8B89C]/30 focus:border-[#2D5016]"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                        ¿Cuál es tu objetivo principal?
                      </label>
                      <Textarea
                        value={consultationForm.message}
                        onChange={(e) => setConsultationForm({ ...consultationForm, message: e.target.value })}
                        required
                        className="rounded-xl border-[#A8B89C]/30 focus:border-[#2D5016] min-h-[100px]"
                        placeholder="Cuéntanos sobre tus metas de salud y nutrición..."
                      />
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-sm">
                        Hubo un error al enviar el formulario. Por favor, intenta de nuevo.
                      </p>
                    )}
                    <Button 
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full bg-[#2D5016] hover:bg-[#2D5016]/90 text-white rounded-full py-6"
                    >
                      {formStatus === 'loading' ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Full */}
      <footer className="bg-[#2C2C2C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Leaf className="w-8 h-8 text-[#A8B89C]" />
                <span 
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  GreenLife
                </span>
              </Link>
              <p className="text-white/60 mb-6">
                Tu plataforma de nutrición premium. Suplementos orgánicos, 
                planes personalizados y asesoría experta.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D5016] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D5016] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D5016] transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 
                className="font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Navegación
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-white/60 hover:text-white transition-colors">
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-white/60 hover:text-white transition-colors">
                    Planes
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 
                className="font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Recursos
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/recetas" className="text-white/60 hover:text-white transition-colors">
                    Biblioteca de Recetas
                  </Link>
                </li>
                <li>
                  <Link href="/quiz" className="text-white/60 hover:text-white transition-colors">
                    Quiz Nutricional
                  </Link>
                </li>
                <li>
                  <Link href="/guias" className="text-white/60 hover:text-white transition-colors">
                    Guías Gratuitas
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/60 hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 
                className="font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:hola@greenlifenutrition.com" 
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    hola@greenlifenutrition.com
                  </a>
                </li>
                <li className="text-white/60 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Lunes a Viernes
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} GreenLife Nutrition. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-white/40 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-white/40 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}