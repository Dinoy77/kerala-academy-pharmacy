import { useState, useRef } from "react";
import EnquiryBox from "./EnquiryBox";
import { useResponsive } from "./useResponsive";
import { getStyles } from "./homeStyles";
import HomeGlobalStyles from "./HomeGlobalStyles";
import HeroSection from "./HeroSection";
import YoutubeSection from "./YoutubeSection";
import AboutSection from "./AboutSection";
import ReasonsSection from "./ReasonsSection";
import CoursesSection from "./CoursesSection";
import BlogsSection from "./BlogsSection";
import StudySection from "./StudySection";

export default function Home() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={styles.page}>
      <EnquiryBox />
      <HomeGlobalStyles />

      <HeroSection
        styles={styles}
        isMobile={isMobile}
        videoRef={videoRef}
        muted={muted}
        toggleMute={toggleMute}
      />

      <AboutSection styles={styles} />
      <YoutubeSection styles={styles} />
      <ReasonsSection styles={styles} />
      <CoursesSection styles={styles} />
      <BlogsSection styles={styles} />
      <StudySection styles={styles} />
    </div>
  );
}