export const sortMoviesByReleaseDate = (movies) => {
  const mov = movies.sort((a, b) => {
    return (
      Number(b.release_date?.split("-")[0]) -
      Number(a.release_date?.split("-")[0])
    );
  });
  console.log(mov);
};
