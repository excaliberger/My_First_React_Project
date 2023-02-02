export function filterFilmsByDirector(list, director) {
    if (director) return list.filter((film) => film.director == director);
    else return list;
  }
  
export function getListOf(list, prop) {
    return [...new Set(list.map((film) => film[prop] || ""))]};

export function getFilmStats(list) {
    /*
    {
        acc_score: 188,
        avg_score: 94,
        total: 2,
        latest: 1988
    }
    */
   return list.reduce((stats, film) => {
        stats.total++;
        stats.acc_score += Number(film.rt_score);
        stats.avg_score = stats.acc_score / stats.total;

        if (stats.latest == null || stats.latest < film.release_date) {
         stats.latest = film.release_date;
        }

        return stats;

   }, {
        acc_score: 188,
        avg_score: 94,
        total: 2,
        latest: 1988
   });
}
