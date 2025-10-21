import { FaStar, FaGoogle } from 'react-icons/fa';

const testimonialsData = [
    { author_name: 'Roly West', rating: 5, text: 'Plum and his team built us our dream garden office. We had strong ideas of what we wanted in terms of doors and finish, and Plum was flexible and able to incorporate these into the build. He’d previously done a great job on our loft conversion and flooring our ground floor, so he was the natural choice for our office. He’s really good at guiding decision making and keeping things on track, and the finish is great. Always a pleasure to work with him.' },
    { author_name: 'Rory Stahelin', rating: 5, text: 'Plum and his team did an entire kitchen renovation (3 months) for us including building a new roof, new structural beams, installing bifolds, a new heating system and finishing the kitchen including plumbing and electrics. They were amazing, completing the work on time, keeping us informed throughout and managing to keep the entire process stress-free whilst we had a 6-month-old to juggle at the same time! I truly believe we couldn\'t have done the project with another builder. Would recommend for any work, was a great experience working with Plum.' },
    { author_name: 'N Dearsley', rating: 5, text: 'Plum and team originally came just to look at an ensuite skylight issue in our roof conversion but after discussion this moved to a bigger, and much needed, list of other work including; replacing Velux windows, installing an additional ensuite window, roof repairs and tiling an extension. The work has been transformative to the space in terms of light and temperature control. Work was done quickly and considerately. They were excellent at communicating during every phase of the work.' },
    { author_name: 'Andrew Flowers', rating: 5, text: 'Plum and team extended our 1930s semi by a hip-to-gable loft and a single-storey ground floor extension. From start to finish it was a pleasure working with him: During the planning phase he helped us work out the best approach for the extensions, and once work started they progressed quickly and we always felt well updated. Any project of this size obviously comes with some unforeseen works and surprises, when extra work became necessary, Plum was transparent about the extra cost and why it was needed and was generally interested in solving the problem in the most efficient way.' },
    { author_name: 'Phil Tyler', rating: 5, text: 'Cannot recommend enough. Complete professionals... tidy, thorough, diligent... and lovely guys too. Did an amazing job on a large loft conversion... looks like a boutique hotel!' },
    { author_name: 'Andrious Khamoo', rating: 5, text: 'We have used Plum & Bros most recently for two quite big projects, one loft conversion and a major building work at another property. We highly recommend them and will use them in near future as they are committed, on time and offer reasonable quotes too.' },
    { author_name: 'E J', rating: 5, text: 'Loft conversion, kitchen extension and some internal remodelling. They were a dedicated team that went above and beyond expectations. I truly recommend and will use them again.' },
    { author_name: 'Domenico Impedovo', rating: 5, text: 'Plum and his brother renewed my loft room to high standards. They were really good with advice too. They were always punctual, coordinated well with other services like plumbing, painting and electrician and finished even earlier than expected. They were clean throughout and really good people to deal with. Stayed in budget as well. I’d have no hesitation in recommending Plum for any home improvement jobs. Thank you. 🙏' },
    { author_name: 'Zoe Ryan', rating: 5, text: 'Plum and team extended our 1930s semi by a hip-to-gable loft and a single-storey ground floor extension. From start to finish it was a pleasure working with him: During the planning phase he helped us work out the best approach for the extensions, and once work started they progressed quickly and we always felt well updated. Any project of this size obviously comes with some unforeseen works and surprises, when extra work became necessary, Plum was transparent about the extra cost and why it was needed and was generally interested in solving the problem in the most efficient way. All in all I would recommend him and the team for anyone extending their property and particularly liked the clear communication, friendly team and his flexibility to accommodate our DIY renovating the existing spaces, with advice and other trade contacts.' },
    { author_name: 'Ariadna S', rating: 5, text: 'Fantastic job by Plum and his team. They listened carefully to what we wanted and exceeded our expectations with their work. Very knowledgeable and approachable. Their attention to detail was amazing, would highly recommend them.' },
    { author_name: 'John Eyles', rating: 5, text: 'Plum and the team did an amazing job on our loft extension. It was the biggest and most daunting project so far for us at the time, and Plum guided us through the timeline and the build process. He made sure we were clear on the options and ensured we had the time to explore options such as bathroom fittings, but always kept us on track with the timing. The end result is a fantastic master bedroom that makes great use of the available space. Thank you Plum and your brothers!' },
    { author_name: 'Mehdi Eslami', rating: 5, text: 'Plum Bros completed our Loft Extension 6 months ago, we could not be happier with the outcome. Their hard work and professionalism exceeded our expectations, they delivered exactly what we asked for. Their quote was lower than those received from local firms so we are very grateful. I will definitely use them again without any doubt. Just view their work and you’ll see for yourself. Very happy customer indeed.' },
    { author_name: 'Tito Paratico', rating: 5, text: 'Plum did a loft conversion and side extension for us. Very good quality, right on schedule and a friendly service. Plum explained what was going to happen at each step, discussed all options with us and offered very valuable advice to maximise space and improve value. No hidden costs and good value for money. Would definitely recommend and use again in future for any work.' },
    { author_name: 'Richard Hamilton', rating: 5, text: 'Completed kitchen extension, loft conversion, porch. Through covid period. Great team, worked swiftly and tidily throughout. Good communication and coordination so project ran ahead of schedule. Very attentive, and additional contractors (electrics/plumbing/windows) also good quality. Follow-up and snagging post-completion exemplary – still in contact 1 year later to confirm we are still happy. Plum and his bro definitely recommended.' },
    { author_name: 'Michael Burgess', rating: 5, text: 'Plum and his team have just completed our loft extension. We are delighted with how it has turned out. Plum made the whole process very easy giving clear time frames for each part of the build. The quality of the work was fantastic and the whole build was very quick and efficient. I would highly recommend Plum & Bros.' },
];

const formatAuthorName = (name: string) => {
  const parts = name.split(' ');
  if (parts.length > 1) {
    const firstNameInitial = parts[0].charAt(0);
    const lastName = parts.slice(1).join(' ');
    return `${firstNameInitial}. ${lastName}`;
  }
  return name;
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex text-yellow-400">
    {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
  </div>
);

export default function Testimonials() {
  const testimonials = testimonialsData.map(t => ({...t, author_name: formatAuthorName(t.author_name)}));
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-brand-light py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our reputation is built on trust, quality, and the words of our valued clients.
        </p>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-light to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-light to-transparent z-10"></div>
        
        <div className="flex marquee-container">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-96 mx-4 mb-4">
              <div className="bg-white p-6 rounded-lg shadow-md h-[280px] text-left flex flex-col">
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                  <StarRating rating={testimonial.rating} />
                  <FaGoogle className="text-gray-400" size={24} />
                </div>
                <p className="text-gray-600 mb-4 italic flex-grow overflow-hidden relative">
                  "{testimonial.text}"
                  <span className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></span>
                </p>
                <p className="font-bold text-right text-[var(--color-brand-dark)] flex-shrink-0">- {testimonial.author_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}