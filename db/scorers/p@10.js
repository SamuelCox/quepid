const k = 10; // @Rank
// k may be > length list, so count up the total number of documents processed.
let count = 0, total = 0;
eachDoc(function(doc, i) {
    if (hasDocRating(i) && (docRating(i)) > 0) { // map 0 -> irrel, 1+ ->rel
        count = count i+1
    }
    total = total + 1
}, k);
const score = count / total : 0.0;
setScore(score);
