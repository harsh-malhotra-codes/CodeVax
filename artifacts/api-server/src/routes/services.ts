import { Router, type IRouter } from "express";
import { ServicesResponse } from "@workspace/api-zod";

const router: IRouter = Router();

const services = ServicesResponse.parse([
  {
    id: "development",
    label: "Development",
    color: "#1abc9c",
    heading: "Custom Software Development",
    intro:
      "From robust SaaS platforms to full-stack enterprise applications, we engineer software that scales.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop",
    services: [
      {
        title: "Custom SaaS Development",
        desc: "End-to-end SaaS platforms built for scale, with multi-tenancy, billing, and analytics baked in.",
      },
      {
        title: "Custom Web Development",
        desc: "High-performance web applications using the latest frameworks and best practices.",
      },
      {
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile apps for iOS and Android with exceptional UX.",
      },
      {
        title: "Full Stack Development",
        desc: "Complete front-to-back development with modern tech stacks including React and Node.",
      },
      {
        title: "MVP Development",
        desc: "Launch your minimum viable product in weeks, not months with a validation-first approach.",
      },
      {
        title: "Node.js Development",
        desc: "Scalable server-side applications and APIs built on Node.js and Express.",
      },
      {
        title: "React.js Development",
        desc: "Dynamic, component-driven UIs built with React and modern state management.",
      },
      {
        title: "CMS Development",
        desc: "Custom and headless CMS solutions tailored to your content management needs.",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth",
    color: "#3498db",
    heading: "Digital Growth & Marketing",
    intro:
      "Data-driven marketing strategies that drive qualified traffic, leads, and revenue.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
    services: [
      {
        title: "Digital Marketing",
        desc: "Comprehensive digital marketing campaigns across all channels for maximum ROI.",
      },
      {
        title: "SEO Services",
        desc: "Technical SEO, content strategy, and link building to improve search rankings.",
      },
      {
        title: "PPC Management",
        desc: "Performance-driven pay-per-click campaigns on Google, Meta, and beyond.",
      },
      {
        title: "Social Media Marketing",
        desc: "Brand building and community engagement across major social platforms.",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    color: "#9b59b6",
    heading: "UI/UX & Product Design",
    intro:
      "Pixel-perfect interfaces and intuitive user experiences that convert and delight.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    services: [
      {
        title: "UI/UX Design",
        desc: "Research-backed user experiences that balance aesthetics with usability and conversion.",
      },
      {
        title: "Website Design",
        desc: "Premium web design that communicates your brand and converts visitors to customers.",
      },
      {
        title: "Product Design",
        desc: "End-to-end product design from wireframes to polished, developer-ready prototypes.",
      },
    ],
  },
  {
    id: "consultancy",
    label: "Consultancy",
    color: "#f39c12",
    heading: "Strategic Business Consulting",
    intro:
      "Expert guidance to validate, launch, and grow your digital product successfully.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop",
    services: [
      {
        title: "Business Strategy",
        desc: "Structured roadmaps and operational frameworks to accelerate your business goals.",
      },
      {
        title: "Go-To-Market Strategy",
        desc: "Comprehensive GTM planning to launch your product with maximum market impact.",
      },
      {
        title: "Startup Consulting",
        desc: "Mentorship and tactical support for early-stage startups from idea to funding.",
      },
    ],
  },
]);

router.get("/services", (_req, res) => {
  res.json(services);
});

export default router;
