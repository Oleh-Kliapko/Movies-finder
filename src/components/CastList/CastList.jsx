import PropTypes from 'prop-types';
import { POSTER_URL } from 'utils/posterUrl';
import { CastWrapper, CastItem, CastImg, CastInfo } from './CastList.styled';
import defaultImage from '../../utils/defaultImage.webp';

export const CastList = ({ credits: { cast } }) => {
  return (
    <CastWrapper>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <CastItem key={id}>
            {profile_path && (
              <CastImg src={`${POSTER_URL}${profile_path}`} alt={name} />
            )}
            {!profile_path && <CastImg src={defaultImage} alt={name} />}
            <CastInfo>
              <span>
                <b>Actor: </b> {name}
              </span>
              <span>
                <b>Character: </b> {character}
              </span>
            </CastInfo>
          </CastItem>
        );
      })}
    </CastWrapper>
  );
};
