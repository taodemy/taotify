import Head from "next/head";

export default function Design() {
  return (
    <>
      <Head>
        <title>Taotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <br />
        <button
          type="button"
          className="bg-gradient-to-r from-primary to-primary px-2 py-1 rounded-full text-light text-base hover:from-primary-400 hover:to-primary-400 active:from-primary"
        >
          button
        </button>

        <button type="button" className="bg-gradient-to-r hover:from-secondary">
          Hover me
        </button>
        <br />
        <h1>this is h1</h1>
        <h2>this is h2</h2>
        <h3>this is h3</h3>
        <h4>this is h4</h4>
        <p>this is paragraph</p>
        <p className="text-lg">this is light paragraph</p>
        <p className="text-base">this is base size</p>
        <p className="text-sm">this is small size</p>
        <p className="text-xs">this is extra small size</p>
        <p className="text-primary">this is default primary color</p>
        <p className="text-primary-400">this is primary-400 color</p>
        <p className="text-primary-300">this is primary-300 color</p>
        <p className="text-primary-200">this is primary-200 color</p>
        <p className="text-primary-100">this is primary-100 color</p>
        <p className="text-secondary">this is default secondary color</p>
        <p className="text-secondary-400">this is secondary-400 color</p>
        <p className="text-secondary-300">this is secondary-300 color</p>
        <p className="text-secondary-200">this is secondary-200 color</p>
        <p className="text-secondary-100">this is secondary-100 color</p>
        <p className="text-ternary">this is default ternary color</p>
        <p className="text-ternary-400">this is ternary-400 color</p>
        <p className="text-ternary-300">this is ternary-300 color</p>
        <p className="text-ternary-200">this is ternary-200 color</p>
        <p className="text-ternary-100">this is ternary-100 color</p>
        <p className="text-warning">this is default warning color</p>
        <p className="text-warning-400">this is warning-400 color</p>
        <p className="text-warning-300">this is warning-300 color</p>
        <p className="text-warning-200">this is warning-200 color</p>
        <p className="text-warning-100">this is warning-100 color</p>
        <p className="text-info">this is default info color</p>
        <p className="text-info-400">this is info-400 color</p>
        <p className="text-info-300">this is info-300 color</p>
        <p className="text-info-200">this is info-200 color</p>
        <p className="text-info-100">this is info-100 color</p>
        <p className="bg-dark">this is dark default background color</p>
        <p className="bg-dark-400">this is dark-400 background color</p>
        <p className="bg-dark-300">this is dark-300 background color</p>
        <p className="bg-dark-200">this is dark-200 background color</p>
        <p className="bg-dark-100">this is dark-100 background color</p>
        <p className="bg-light">this is light default background color</p>
        <p className="bg-light-400">this is light-400 background color</p>
        <p className="bg-light-300">this is light-300 background color</p>
        <p className="bg-light-200">this is light-200 background color</p>
        <p className="bg-light-100">this is light-100 background color</p>
        <p className=" transition duration-500 bg-gradient-to-r from-primary hover:from-sencondary">
          this is a fading color
        </p>
      </main>
    </>
  );
}
