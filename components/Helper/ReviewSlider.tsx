import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewsCard from "./ClientReviewsCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function ReviewSlider() {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReviewsCard
        image="/images/user2.jpg"
        user="Sharon L."
        role="Web Developer"
        description="Nati transformed our online presence with a beautiful, responsive website. His attention to detail and creativity were outstanding. Highly recommend!"
      />
      <ClientReviewsCard
        image="/images/user1.jpg"
        user="Itai R."
        role="CEO"
        description="Working with Nati was a pleasure. He created a stunning portfolio site for me that truly showcases my work. His professionalism and skill are unmatched."
      />
      <ClientReviewsCard
        image="/images/user4.jpg"
        user="Einat K."
        role="CTO"
        description="Nati delivered a robust and scalable web app for our startup. His ability to understand our needs and provide innovative solutions was impressive."
      />
      <ClientReviewsCard
        image="/images/user3.jpg"
        user="David M."
        role="Freelance Photographer"
        description="Collaborating with Nati on a project was an enriching experience. His expertise in React and Next.js is top-notch, and he’s always eager to share his knowledge."
      />
      <ClientReviewsCard
        image="/images/femaleUser.jpeg"
        user="Ella N."
        role="Friend"
        description="Nati helped me build a personal blog as a favor, and it turned out amazing! His patience and willingness to help out a friend meant a lot."
      />
      <ClientReviewsCard
        image="/images/maleUser.png"
        user="Frank O."
        role="Tech Enthusiast"
        description="Nati’s ability to simplify complex concepts is fantastic. He created an informative tech blog for me, making it easy for readers to understand."
      />
      <ClientReviewsCard
        image="/images/femaleUser.jpeg"
        user="Sara Q."
        role="Marketing Manager"
        description="Our e-commerce site needed an overhaul, and Nati delivered beyond expectations. The site is now faster, more attractive, and user-friendly."
      />
      <ClientReviewsCard
        image="/images/femaleUser.jpeg"
        user="Kara T."
        role="Friend"
        description="I needed a portfolio site for my artwork, and Nati volunteered to help. The result was a stunning website that I’m proud to share."
      />
      <ClientReviewsCard
        image="/images/femaleUser.jpeg"
        user="Rachel A."
        role="Personal Trainer"
        description="The fitness website Nati built for me is incredible. It’s user-friendly, visually appealing, and has helped grow my client base."
      />
      <ClientReviewsCard
        image="/images/maleUser.png"
        user="Leo U"
        role="Restaurant Owner"
        description="Nati’s redesign of our restaurant’s website has attracted more customers than ever. His design is both beautiful and functional."
      />
      <ClientReviewsCard
        image="/images/maleUser.png"
        user="Victor E."
        role="Freelance Writer"
        description="The personal website Nati developed for me is fantastic. It’s easy to navigate, and the design is exactly what I wanted. He’s a true professional."
      />
      <ClientReviewsCard
        image="/images/femaleUser.jpeg"
        user="Terry G."
        role="Artist"
        description="Nati’s work on my online gallery was exceptional. He managed to create a website that perfectly showcases my artwork in a digital space."
      />
    </Carousel>
  );
}
