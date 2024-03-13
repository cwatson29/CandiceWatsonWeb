"use client";
export default function Home() {
  return (
    <main className="flex bg-gray/25 min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 h-screen max-w-5xl w-full items-center justify-between">
        <div className="text-base text-center mb-10">
          Welcome to my Website!
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-50 w-50 object-cover md:h-full md:w-48"
                src="me.jpeg"
                alt="A picture of Candice Watson"
              ></img>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Candice Watson
              </div>
              <div className="mt-2 text-slate-500">
                As a driven and self-motivated senior at Marquette University,
                set to graduate in May with a strong academic background, I am
                eager to transition into the role of a software developer. With
                a proven track record of exceeding expectations, I thrive in
                challenging environments and I am passionate about
                problem-solving. My dedication, combined with a love for
                technology and innovation, fuels my ambition to contribute
                meaningfully to an organization.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible bg-gradient-to-tr from-green-50 via-slate-50 to-amber-50 z-10 h-screen w-screen items-center">
        <div className="text-base text-center my-8">WHO IS CANDICE?</div>
        <div className="grid grid-cols-3 gap-10">
          <div className="text-center ">
            Candice is Jamaican.
            <img
              className="h-auto max-w-52 rounded-lg mt-4"
              src="margaritaville.jpg"
              alt="Candice drinking coconut on the beach."
            ></img>
          </div>
          <div className="text-center">
            Candice is Family.
            <img
              className="h-auto max-w-52 rounded-lg mt-4"
              src="famchris.jpg"
              alt="My family on christmas"
            ></img>
          </div>
          <div>
            Candice is a Student.
            <img
              className="h-auto max-w-52 rounded-lg mt-4"
              src="mu.jpg"
              alt="Candice in Marquette Sweatshirt"
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-52 rounded-lg"
              src="iamjam.png"
              alt="I am Jamaican."
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-52 rounded-lg"
              src="dadguitar.jpg"
              alt="My dad and I"
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-52 rounded-lg"
              src="MU_seal.jpeg"
              alt="Marquette University seal"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-10">Please explore the rest of my website.</div>
    </main>
  );
}
