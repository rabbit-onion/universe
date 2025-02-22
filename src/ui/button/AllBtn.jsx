import styled from 'styled-components';

export const AllAges = styled.button`
  background-color: transparent;
`;

const AllBtn = () => {
  return (
    <>
      <AllAges>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0027 0H19.9973C8.95311 0 0 8.95311 0 19.9973V20.0027C0 31.0469 8.95311 40 19.9973 40H20.0027C31.0469 40 40 31.0469 40 20.0027V19.9973C40 8.95311 31.0469 0 20.0027 0Z"
            fill="#209751"
            style={{ fill: '#209751', fillOpacity: 1 }}
          />
          <path
            d="M3.93652 26.608L8.81068 13.3918H12.0708L16.9449 26.608H13.7807L12.7579 23.6356H8.1235L7.10073 26.608H3.93652ZM10.4407 16.9715L9.01843 21.0786H11.863L10.4407 16.9715Z"
            fill="white"
            style={{ fill: 'white', fillOpacity: 1 }}
          />
          <path
            d="M20.5572 13.4078V23.9712H26.3423V26.608H17.6807V13.3918L20.5572 13.4078Z"
            fill="white"
            style={{ fill: 'white', fillOpacity: 1 }}
          />
          <path
            d="M30.273 13.4078V23.9712H36.0581V26.608H27.3965V13.3918L30.273 13.4078Z"
            fill="white"
            style={{ fill: 'white', fillOpacity: 1 }}
          />
        </svg>
      </AllAges>
    </>
  );
};

export default AllBtn;
