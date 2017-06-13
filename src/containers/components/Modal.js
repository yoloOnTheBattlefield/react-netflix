import React from 'react';
import { Popup, Header, Image, Modal, Rating } from 'semantic-ui-react';
import { PosterImage } from './Modal.styles';

export default ({ clickedMovieInfo, showModal, clickedMovie }) => {
  const {
    title,
    poster_path,
    vote_average,
    overview,
    release_date
  } = clickedMovieInfo

  return (
    <Modal open={showModal} onClose={() => clickedMovie(null, false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image>
        <PosterImage poster={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <Modal.Description>
          <Header>
            {
              !vote_average ? <h3>No Ratings yet</h3> :
              <Rating defaultRating={Math.round(vote_average / 2)} maxRating={10 / 2} />
            }
          </Header>
          <p>{overview}</p>
          <p>{release_date}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
