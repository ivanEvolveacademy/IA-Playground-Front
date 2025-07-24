import styles from './App.module.css'
import { Button } from "./components/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/card"
import { Badge } from "./components/badge"
import { Input } from "./components/input"
import {
  Smartphone,
  Shield,
  Truck,
  CreditCard,
  Star,
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import { Link } from "react-router-dom"

function App() {
  function errorIntencionado() {
    // Esto provocará un ReferenceError
    const variableQueNoExiste = "Esta variable no existe";
    console.log(variableQueNoExiste);

    console.error("Esto es un error intencionado para probar la página de error");
    const error = new Error("Error intencionado");
    // Lanzar el error para que sea capturado por el manejador de errores global
    throw error;

  }  
  function errorIntencionado2() {
    // Esto provocará un ReferenceError
    console.log(variableQueNoExiste2);

    console.error("Esto es un error intencionado para probar la página de error");
    const error = new Error("Error intencionado");
    // Lanzar el error para que sea capturado por el manejador de errores global
    throw error;
  } 
  return (
    <>
   <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Smartphone className={styles.logoIcon} />
          <span className={styles.logoText}>MobileStore</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="#productos" className={styles.navLink}>
            Productos
          </Link>
          <Link href="#ofertas" className={styles.navLink}>
            Ofertas
          </Link>
          <Link href="#servicios" className={styles.navLink}>
            Servicios
          </Link>
          <Link href="#contacto" className={styles.navLink}>
            Contacto
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className={styles.mobileMenuButton}>
          <Menu className={styles.menuIcon} />
        </Button>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.heroText}>
                  <h1 className={styles.heroTitle}>Los Mejores Móviles al Mejor Precio</h1>
                  <p className={styles.heroDescription}>
                    Descubre nuestra amplia selección de smartphones de las mejores marcas. Calidad garantizada, precios
                    increíbles y envío gratuito.
                  </p>
                </div>
                <div className={styles.heroButtons}>
                  <Button size="lg" className={styles.primaryButton}>
                    Ver Catálogo
                  </Button>
                  <button onClick={errorIntencionado}>Provocar error</button>
                  <button onClick={errorIntencionado2}>Provocar error 2</button>
                  <Button variant="outline" size="lg">
                    Ofertas Especiales
                  </Button>
                </div>
                <div className={styles.heroFeatures}>
                  <div className={styles.heroFeature}>
                    <Shield className={styles.featureIcon} />
                    <span>Garantía oficial</span>
                  </div>
                  <div className={styles.heroFeature}>
                    <Truck className={styles.featureIcon} />
                    <span>Envío gratis</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroImage}>
                <img
                  src="/vite.svg"
                  width="400"
                  height="500"
                  alt="Vite Logo"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Productos Destacados */}
        <section id="productos" className={styles.products}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2 className={styles.title}>Productos Destacados</h2>
                <p className={styles.subtitle}>Los smartphones más populares y mejor valorados por nuestros clientes</p>
              </div>
            </div>
            <div className={styles.productsGrid}>
              {[
                {
                  name: "iPhone 15 Pro",
                  price: "€1,199",
                  originalPrice: "€1,299",
                  image: "/placeholder.svg?height=300&width=250",
                  features: ["128GB", "Titanio", "Cámara 48MP"],
                  rating: 4.9,
                },
                {
                  name: "Samsung Galaxy S24",
                  price: "€899",
                  originalPrice: "€999",
                  image: "/placeholder.svg?height=300&width=250",
                  features: ["256GB", "AI Camera", "5G"],
                  rating: 4.8,
                },
                {
                  name: "Google Pixel 8",
                  price: "€699",
                  originalPrice: "€799",
                  image: "/placeholder.svg?height=300&width=250",
                  features: ["128GB", "Magic Eraser", "Pure Android"],
                  rating: 4.7,
                },
              ].map((product, index) => (
                <Card key={index} className={styles.productCard}>
                  <Badge className={styles.offerBadge}>Oferta</Badge>
                  <CardHeader className={styles.productHeader}>
                    <img
                      src="/vite.svg"
                      width="250"
                      height="300"
                      alt="Vite Logo"
                      className={styles.productImage}
                    />
                  </CardHeader>
                  <CardContent className={styles.productContent}>
                    <CardTitle className={styles.productName}>{product.name}</CardTitle>
                    <div className={styles.productPrice}>
                      <span className={styles.currentPrice}>{product.price}</span>
                      <span className={styles.originalPrice}>{product.originalPrice}</span>
                    </div>
                    <div className={styles.productRating}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${styles.star} ${
                            i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty
                          }`}
                        />
                      ))}
                      <span className={styles.ratingText}>({product.rating})</span>
                    </div>
                    <div className={styles.productFeatures}>
                      {product.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className={styles.featureBadge}>
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className={styles.addToCartButton}>Añadir al Carrito</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Características */}
        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2 className={styles.title}>¿Por Qué Elegirnos?</h2>
                <p className={styles.subtitle}>Más de 10 años de experiencia en el sector móvil nos avalan</p>
              </div>
            </div>
            <div className={styles.featuresGrid}>
              {[
                {
                  icon: Shield,
                  title: "Garantía Oficial",
                  description: "Todos nuestros productos cuentan con garantía oficial del fabricante",
                },
                {
                  icon: Truck,
                  title: "Envío Gratuito",
                  description: "Envío gratuito en pedidos superiores a 50€. Entrega en 24-48h",
                },
                {
                  icon: CreditCard,
                  title: "Pago Seguro",
                  description: "Múltiples formas de pago seguras. Financiación disponible",
                },
              ].map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIconContainer}>
                    <feature.icon className={styles.featureIconLarge} />
                  </div>
                  <div className={styles.featureText}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2 className={styles.title}>Lo Que Dicen Nuestros Clientes</h2>
                <p className={styles.subtitle}>Miles de clientes satisfechos nos recomiendan</p>
              </div>
            </div>
            <div className={styles.testimonialsGrid}>
              {[
                {
                  name: "María García",
                  comment: "Excelente servicio y precios inmejorables. Mi iPhone llegó perfectamente empaquetado.",
                  rating: 5,
                },
                {
                  name: "Carlos Rodríguez",
                  comment: "Muy profesionales. Me ayudaron a elegir el móvil perfecto para mis necesidades.",
                  rating: 5,
                },
                {
                  name: "Ana López",
                  comment: "Entrega rápida y producto tal como se describía. Totalmente recomendable.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className={styles.testimonialContent}>
                    <div className={styles.testimonialRating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className={`${styles.star} ${styles.starFilled}`} />
                      ))}
                    </div>
                    <p className={styles.testimonialComment}>"{testimonial.comment}"</p>
                    <p className={styles.testimonialName}>{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className={styles.newsletter}>
          <div className={styles.container}>
            <div className={styles.newsletterContent}>
              <div className={styles.newsletterText}>
                <h2 className={styles.newsletterTitle}>No Te Pierdas Nuestras Ofertas</h2>
                <p className={styles.newsletterDescription}>
                  Suscríbete a nuestro newsletter y recibe las mejores ofertas directamente en tu email
                </p>
              </div>
              <div className={styles.newsletterForm}>
                <form className={styles.form}>
                  <Input type="email" placeholder="Tu email" className={styles.emailInput} />
                  <Button type="submit" variant="secondary">
                    Suscribirse
                  </Button>
                </form>
                <p className={styles.newsletterDisclaimer}>
                  Al suscribirte aceptas recibir emails promocionales. Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <Smartphone className={styles.footerLogoIcon} />
              <span className={styles.footerLogoText}>MobileStore</span>
            </div>
            <p className={styles.footerDescription}>Tu tienda de confianza para móviles y accesorios desde 2014.</p>
            <div className={styles.socialLinks}>
              <Facebook className={styles.socialIcon} />
              <Instagram className={styles.socialIcon} />
              <Twitter className={styles.socialIcon} />
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Productos</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="#" className={styles.footerLink}>
                  iPhone
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Samsung
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Google Pixel
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Servicios</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Reparaciones
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Financiación
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Contacto</h4>
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>+34 900 123 456</span>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>info@mobilestore.es</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>© {new Date().getFullYear()} MobileStore. Todos los derechos reservados.</p>
            <nav className={styles.footerBottomLinks}>
              <Link href="#" className={styles.footerBottomLink}>
                Términos y Condiciones
              </Link>
              <Link href="#" className={styles.footerBottomLink}>
                Política de Privacidad
              </Link>
              <Link href="#" className={styles.footerBottomLink}>
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
   
    </>
  )
}

export default App

