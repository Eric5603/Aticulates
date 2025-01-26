// app/about/page.tsx
export default function About() {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
  
          {/* Our Story Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              BuildMaster was founded in 2003 by John Doe and Jane Smith, two visionary engineers with a passion for building structures that stand the test of time. What started as a small local construction company has grown into a nationally recognized firm known for its innovative designs and commitment to quality.
            </p>
            <p className="text-lg text-gray-700">
              Over the past 20 years, we have completed over 500 projects, ranging from residential homes to large-scale commercial developments. Our journey has been marked by a relentless pursuit of excellence and a dedication to our clients' visions.
            </p>
          </section>
  
          {/* Our Mission Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to deliver exceptional construction services that exceed our clients' expectations. We strive to create sustainable, innovative, and functional spaces that enhance the lives of those who use them. By combining cutting-edge technology with traditional craftsmanship, we aim to set new standards in the construction industry.
            </p>
          </section>
  
          {/* Our Values Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2"><strong>Integrity:</strong> We believe in doing the right thing, even when no one is watching. Our reputation is built on trust and transparency.</li>
              <li className="mb-2"><strong>Quality:</strong> We are committed to delivering the highest quality in every project, ensuring that our work stands the test of time.</li>
              <li className="mb-2"><strong>Innovation:</strong> We embrace new technologies and methods to improve efficiency and sustainability in our projects.</li>
              <li className="mb-2"><strong>Collaboration:</strong> We work closely with our clients, architects, and contractors to ensure that every project is a success.</li>
              <li><strong>Sustainability:</strong> We are dedicated to minimizing our environmental impact and promoting sustainable building practices.</li>
            </ul>
          </section>
  
          {/* How We Work Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">How We Work</h2>
            <p className="text-lg text-gray-700 mb-4">
              At BuildMaster, we follow a structured and collaborative approach to ensure that every project is completed on time, within budget, and to the highest standards. Our process includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2"><strong>Consultation:</strong> We start by understanding your vision, needs, and budget. Our team works with you to develop a detailed project plan.</li>
              <li className="mb-2"><strong>Design:</strong> Our architects and designers create innovative and functional designs that align with your goals.</li>
              <li className="mb-2"><strong>Planning:</strong> We develop a comprehensive project timeline and budget, ensuring that all aspects of the project are carefully planned.</li>
              <li className="mb-2"><strong>Construction:</strong> Our skilled team of builders and contractors bring the design to life, using the highest quality materials and techniques.</li>
              <li><strong>Review:</strong> After completion, we conduct a thorough review to ensure that every detail meets our standards and your expectations.</li>
            </ul>
          </section>
  
          {/* Our Team Section */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our team is the backbone of BuildMaster. Comprised of experienced professionals, including architects, engineers, project managers, and skilled laborers, we are united by a shared commitment to excellence. Meet some of the key members of our team:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                <p className="text-gray-600">Co-Founder & CEO</p>
                <p className="text-gray-700 mt-2">With over 25 years of experience in the construction industry, John leads BuildMaster with a vision for innovation and excellence.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                <p className="text-gray-600">Co-Founder & COO</p>
                <p className="text-gray-700 mt-2">Jane oversees the day-to-day operations, ensuring that every project runs smoothly and meets our high standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Michael Johnson</h3>
                <p className="text-gray-600">Head of Design</p>
                <p className="text-gray-700 mt-2">Michael brings creativity and precision to every project, ensuring that our designs are both functional and aesthetically pleasing.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }