/**
 * programmers
 * level 1
 *
 * 해시로 풀기보단 sort 해서 푸는게 더 직관적임
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) return participant[i];
  }

  return participant.pop();
}
