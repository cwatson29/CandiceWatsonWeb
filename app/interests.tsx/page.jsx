"use client";
export default function interests() {
  return (
    <main className="flex bg-gray/25 min-h-screen flex-col items-center justify-between p-24">
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
