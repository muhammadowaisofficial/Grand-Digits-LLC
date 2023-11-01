import { NextPage } from 'next';

import NextImage from '@/components/ui/NextImage';
import { Separator } from '@/components/ui/Separator';
import PagesBanner from '@/components/PagesBanner';
import { reviews } from '@/content/Reviews';
import { Icons } from '@/components/Icons';

const Reviews: NextPage = () => {
  const totalReviews: number = 49;
  return (
    <div className="reviews_page">
      {/* Reviews Banner */}
      <PagesBanner
        bgImage=""
        image={'/images/banner-item-reviews.webp'}
        mainHeading="We listen to our client’s feedback & improvise."
        subHeading="Clients Love Us"
        desc="We are a team of creative thinkers and problem solvers dedicated to pushing the limits of what is possible by helping brands achieve their goals."
      />

      {/* Testimonials  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              This Is What Industry’s
            </h6>
            <h3 className="section_mainheading text-center">
              Top Clientele Sounds Like
            </h3>
            <p className="section_description text-center">
              "Hands down one of the best company we've had the pleasure to work
              with. Their service is top notch, and they really know what
              they're talking about."
            </p>
          </div>

          {/* Testimonials */}
          <div className="overflow-hidden py-4 z-[2]">
            {/* Packages */}
            <div className="mx-4 grid grid-cols-1 gap-7 py-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
              {reviews.map((review) => (
                <div
                  className="testimony_Card bg-white cursor-pointer rounded-lg border-2 border-lightborder px-6 py-9 duration-300 hover:border-purpule hover:shadow-xl"
                  key={review.id}
                >
                  <div className="client_info flex flex-col items-center justify-center">
                    <div className="client relative h-[90px] w-[90px] rounded-full bg-cover">
                      <NextImage
                        src={review.image}
                        alt={review.clientName}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5 className="main_point mb-1 mt-5 text-[24px] font-semibold text-[#333] ">
                      {review.mainpoint}
                    </h5>
                    <p className="overall_rating text-[#16px] text-[#666]">
                      Overall Rating from {totalReviews} Clients
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="review h-[200px]">
                    <p className="overall_rating text-center text-[#16px] text-[#666]">
                      " {review.review} "
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <div className="client_info flex flex-col items-center justify-center ">
                    <h5 className="client_name mb-1 mt-5 text-[24px] font-medium text-[#333] ">
                      {review.clientName}
                    </h5>
                    <p className="client_Designation text-[#16px] text-[#666]">
                      {review.designatioon}
                    </p>
                    <p className="stars flex items-center justify-start gap-1 mt-2">
                      {[...Array(review.stars)].map((e, i) => (
                        <Icons.star className="h-4 w-4" key={i} />
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Section_Spinners absolute left-10 top-16 -z-[1]  w-fit animate-spin hidden 2xl:block">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Trangles Spinner"
            width={150}
            height={165}
          />
        </div>
        <div className="Section_Spinners absolute right-0 top-16 -z-[1]  w-fit  hidden 2xl:block">
          <NextImage
            src={'/images/element-16.png'}
            alt="Section Box Spiner"
            width={341}
            height={360}
          />
        </div>
        <div className="Section_Spinners absolute bottom-16 left-0 -z-[1]  w-fit">
          <NextImage
            src={'/images/element-15.webp'}
            alt="Section Box Spiner"
            width={126}
            height={427}
          />
        </div>
      </section>
    </div>
  );
};

export default Reviews;
