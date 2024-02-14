import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

// 사직 35.1940316, 129.0615183
// 문수 35.5321681, 129.2655749

const StyledMapWrapper = styled.div`
    width: 100px;
    max-width: 1080px;
    margin: 0, auto;
    text-align: center;
`;

const KakaoMap = ({ latitude, longitude }) => {
    return (
      <StyledMapWrapper>
        <Map
          center={{ lat: latitude, lng: longitude }}
          style={{
            width: '1080px',
            height: '500px',
          }}
        >
          <MapMarker
            style={{ border: 'transparent' }}
            position={{ lat: latitude, lng: longitude }}
          />
        </Map>
      </StyledMapWrapper>
    );
  };

export default KakaoMap;