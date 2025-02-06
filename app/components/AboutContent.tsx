const AboutContent = () => {
    return (
      <div className="min-h-screen bg-light-blue text-dark-gray p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
          <div className="image-container flex flex-col md:flex-row md:items-center md:space-x-6 mb-8">
            <img 
              src="/logo_ids.jpg" 
              alt="IDS Logo" 
              className="max-w-[500px] max-h-[400px] w-full h-auto object-contain rounded-lg shadow-lg"
            />
            <div className="text-container md:max-w-[50%] text-white p-4">
              <p className="text-lg leading-relaxed">
                IDS GROUP offers product selections tailored to each of its customers' industries:
              </p>
              <ul className="list-disc pl-5">
                <li>Tools and Metrology</li>
                <li>Protection, Safety, and Hygiene</li>
                <li>Visual Management / Lean</li>
                <li>Workshop Equipment</li>
                <li>Work Ergonomics</li>
                <li>Maintenance</li>
                <li>Technology</li>
                <li>ESD (Electrostatic Discharge)</li>
                <li>Consumables and Accessories</li>
                <li>Services and Solutions</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to offer you both the most comprehensive and the simplest selection to navigate.
              <br /><br />
              Fulfilling our responsibility as a leader means committing to both major engagements and small initiatives.
              <br /><br />
              <b>Our Commitment to Product Quality</b>.
              At IDS GROUP, we work every day to ensure you make the right purchase. Our goal is to offer our customers the best products at the best possible prices.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutContent;
