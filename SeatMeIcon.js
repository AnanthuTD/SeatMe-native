import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SeatMeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={256}
      height={256}
      {...props}>
      <G transform="translate(0 -1004.362)" className="color000 svgShape">
        <Circle
          cx={24}
          cy={1028.362}
          r={24}
          fill="#239fdb"
          fillRule="evenodd"
          className="color239fdb svgShape"
        />
        <Path
          fill="#0b5ecd"
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            blockProgression: 'tb',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M30.73 1051.383a24 24 0 001.967-.652 24 24 0 002.19-.98 24 24 0 002.08-1.194 24 24 0 001.951-1.394 24 24 0 001.803-1.584 24 24 0 001.634-1.756 24 24 0 001.454-1.91 24 24 0 001.254-2.045 24 24 0 001.042-2.16 24 24 0 00.823-2.254 24 24 0 00.039-.15l-13.5-13.5a1.496 1.496 0 00-1.059-.442 1.508 1.508 0 00-1.5 1.5v4.996l-4.158-4.158c-.02-.021-.05-.034-.076-.05-.02-.013-.035-.028-.057-.038a.542.542 0 00-.213-.049l-12.95-1h-.05v-.001a.525.525 0 00-.195.045l-.031.016a.435.435 0 00-.092.068.48.48 0 00-.137.197c-.003.01-.003.021-.006.032a.537.537 0 00-.01.228c.003.013.002.025.005.037a.468.468 0 00.113.217c.005.006.004.014.01.02l.847.847v3.793c0 .138.056.263.147.354l1.853 1.853v6.293l14.822 14.821z"
          color="#000"
          fontFamily="sans-serif"
          fontWeight={400}
          className="color0b5ecd svgShape"
        />
        <Path
          fill="#fff"
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            blockProgression: 'tb',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M32.409 1021.363c-.822 0-1.5.677-1.5 1.5v5c0 .646.42 1.197 1 1.406v.293h-5.492c-.676-.01-.676 1.01 0 1h.492v6h1v-6h4v6h1v-6h.584c.676.01.676-1.01 0-1h-.584v-.293c.579-.209 1-.76 1-1.406v-5c0-.823-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v5c0 .285-.214.5-.5.5a.488.488 0 01-.5-.5v-5c0-.286.214-.5.5-.5zm-19.004.199c-.629.019-.654.944-.027.998l.53.04v4.462a.5.5 0 00.5.5h1.5v8h1v-8h6v8h1v-8h1.5a.5.5 0 00.5-.5v-3.535l.42.033c.694.085.775-.976.077-.997l-12.951-1h-.049zm1.504 1.117l10 .771v3.112h-10z"
          color="#000"
          fontFamily="sans-serif"
          fontWeight={400}
          overflow="visible"
          className="colorfff svgShape"
        />
      </G>
    </Svg>
  );
}

export default SeatMeIcon;
