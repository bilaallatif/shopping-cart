import { styled } from "styled-components";
import type { BaseProps } from "../main.tsx";

const Info = styled.div((props) => ({
  height: "50%",
  width: "50%",
  borderRadius: "5%",
  backgroundColor: props.theme.colours.red,
  color: props.theme.colours.white,
  fontSize: "1.5rem",

  padding: "5rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
}));

export const Home = styled(({ className }: BaseProps) => {
  return (
    <div className={className}>
      <Info>
        <div>
          At Pick’d, we believe the best apples are the ones you pick yourself.
          Nestled in the heart of nature, our family-run farm offers a wholesome
          day out for all ages — filled with fresh air, sweet fruit, and
          unforgettable memories.
        </div>
        <div>
          Whether you're here for a relaxing orchard stroll, to stock up on
          just-picked apples, or to enjoy our homemade cider and baked goods,
          we’re excited to share our slice of the season with you. Come for the
          fruit, stay for the experience.
        </div>
        <div>Fresh. Local. Pick’d by You.</div>
      </Info>
    </div>
  );
})({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});
