import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      {/* <Spline scene="https://prod.spline.design/LnkdHaY-8DebhyGG/scene.splinecode" /> */}
    </div>
  );
}
