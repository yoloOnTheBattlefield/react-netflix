import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clickedMovie } from '../../redux/actions/index';
import { Rating } from 'semantic-ui-react';
import { Card } from './Card.styles';
import  {
  ModalContainer,
  Trigger,
  ModalWrapper,
  ModalHeader,
  ModalContent,
  ModalDescription,
  Review,
  Paragraph,
  ReleaseDate,
  ButtonGroup,
  Button
} from './Modal.styles';

const Modal = ({ movie, showModal, clickedMovie, match }) => {
  const {
    title,
    poster_path,
    vote_average,
    overview,
    release_date,
    id
  } = movie;

  if(!movie){
    return null;
  }
  return (
    <ModalContainer showModal={showModal} >
      <Trigger showModal={showModal} onClick={() => clickedMovie('', false)} />
      <ModalWrapper>
        <ModalHeader>{title}</ModalHeader>
        <ModalContent>
          <Card
            poster={`https://image.tmdb.org/t/p/w300${poster_path}`}
            style={{margin: '0 25px'}}
          />
          <ModalDescription>
            {
              !vote_average ? <h3>No Ratings yet</h3> :
              <Rating defaultRating={Math.round(vote_average / 2)} maxRating={5} />
            }
            <Review>
              <Paragraph>{overview}</Paragraph>
              <ReleaseDate>{release_date}</ReleaseDate>
            </Review>
            <ButtonGroup>
              <Button background='#0F0F0F' color='white'>
                <Link to={`/movie/${id}`} onClick={() => clickedMovie('', false)}>
                  FIND OUT MORE
                </Link>
              </Button>
              <Button background='#2274A5' color='white'>TWITTER</Button>
              <Button background='#00CC66' color='white'>SAVE</Button>
            </ButtonGroup>
          </ModalDescription>
        </ModalContent>
      </ModalWrapper>
    </ModalContainer>
  )
}

const mapStateToProps = ({ clickedMovie }) => ({
  showModal: clickedMovie.showModal
});

const mapDispatchToProps = (dispatch) => ({
  clickedMovie: (movie, showModal) =>  dispatch(clickedMovie(movie, showModal))
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
