import React, { Suspense, useRef, useState } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { Environment, Loader } from "@react-three/drei";

import { BodyCopy, Headline, Subtitle } from "./Text";
import { Image } from "./Image";
import { ImageCube } from "./ImageCube";
import { WebGLBackground } from "./WebGLBackground";
import { Lens } from "./Lens";
import CodropsFrame from "./CodropsFrame";
import EffectsToggle from "./EffectsToggle";

import "@14islands/r3f-scroll-rig/css";

// Photos by <a href="https://unsplash.com/@maxberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maxim Berg</a> on <a href="https://unsplash.com/photos/u8maxDvbae8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function App() {
  const eventSource = useRef();
  const [enabled, setEnabled] = useState(true);

  return (
    // We attach events onparent div in order to get events on both canvas and DOM
    <div ref={eventSource}>
      <CodropsFrame />
      <GlobalCanvas
        // shader errors are hidden by default which speeds up compilation
        debug={false}
        // scaleMultiplier is a scroll-rig setting to scale the entire scene
        scaleMultiplier={0.01}
        // All other props on the R3F Canvas is supported:
        eventSource={eventSource}
        eventPrefix="client"
        flat // disable toneMapping since we have editorial images
        camera={{ fov: 14 }}
        style={{ pointerEvents: "none", zIndex: -1 }}
      >
        {(globalChildren) => (
          <Lens>
            <WebGLBackground />
            <Suspense fallback="">
              {/* 
                Our materials use PBR ligting and requires an environment
              */}
              <Environment files="env/empty_warehouse_01_1k.hdr" />
              {globalChildren}
            </Suspense>
          </Lens>
        )}
      </GlobalCanvas>
      <SmoothScrollbar
        enabled={enabled}
        config={{ syncTouch: true }} // Lenis setting to force smooth scroll on touch devices
      />
      <article>
        <EffectsToggle setEnabled={setEnabled} enabled={enabled} />
        <header className="container">
          <div className="headerLayout">
            <h2>
              <Headline wobble>
                CYGAAR {enabled ? " ABSTRACT" : ""}
              </Headline>
            </h2>
            <BodyCopy as="p" className="subline">
              CTO of Cube Labs and Lead Developer at Abstract, 
              building the future of consumer-focused blockchain technology
            </BodyCopy>
          </div>
        </header>
        <section className="container">
          <Image
            src="images/maxim-berg-1_U2RcHnSjc-unsplash.jpg"
            className="ImageLandscape"
          />
        </section>
        <section className="container">
          <h3>
            <Subtitle>Consumer first, built for mass adoption:</Subtitle>
            <em>
              <Subtitle>
                Using the ZK Stack by ZKsync + Celestia for fast, cheap secure transactions
              </Subtitle>
            </em>
          </h3>
          <p>
            <BodyCopy>
              Abstract is a cutting-edge onchain platform designed to drive mass adoption
              of crypto and spearhead consumer crypto adoption via "a first-of-its-kind consumer terminal, a frictionless wallet with limitless capabilities, and a chain powering dozens of consumer-friendly crypto applications".
            </BodyCopy>
          </p>
        </section>
        <section className="ParallaxContainer">
          <Image
            src="images/maxim-berg-qsDfqZyTCAE-unsplash-crop.jpg"
            className="aspect-9_13"
            parallaxSpeed={1.08}
          />
          <Image
            src="images/maxim-berg-ANuuRuCRRAc-unsplash.jpg"
            className="aspect-16_11"
            parallaxSpeed={0.92}
          />
        </section>
        <section className="container">
          <h4>
            <BodyCopy>
              The cygaar appreciation society is proud to have launched 
              a memecoin on abstract to honour and celebrate Cygaar & the team's contributions 
              to ethereum and society at large.
            </BodyCopy>
          </h4>
        </section>
        <section>
          <ImageCube
            src="images/maxim-berg-TcE45yIzJA0-unsplash.jpg"
            className="JellyPlaceholder"
          />
        </section>
        <section className="container">
          <h3>
            <Subtitle>We love you Cygaar</Subtitle>
            <em>
              <Subtitle>
                Backing abstract to build the world's largest onchain community
              </Subtitle>
            </em>
          </h3>
          <p>
            <a href="https://github.com/cygaar" target="_blank" rel="noopener noreferrer">
              <BodyCopy>
                Find Cygaar on GitHub, Substack (@cygaar), and Twitter (@0xCygaar)
              </BodyCopy>
            </a>
          </p>
        </section>
        <footer>
          <CodropsFrame />
        </footer>
      </article>

      <Loader
        containerStyles={{
          background: "transparent",
          top: "auto",
          bottom: 0,
          height: "5px",
        }}
        innerStyles={{ background: "black", width: "100vw", height: "5px" }}
        barStyles={{ background: "#00ff00", height: "100%" }}
      />
    </div>
  );
}
