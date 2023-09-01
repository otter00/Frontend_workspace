function solution(N, M, s, t, trails) {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let [u, v] of trails) {
    graph[u].push(v);
  }

  const visited = Array(N + 1).fill(false);
  const path = [];

  function dfs(v) {
    visited[v] = true;
    path.push(v);

    if (v === t && path.length === N) {
      return path.slice();
    }

    for (let u of graph[v]) {
      if (!visited[u]) {
        const result = dfs(u);
        if (result) return result;
      }
    }

    path.pop();
    visited[v] = false;
  }

  const path1 = dfs(s);
  if (!path1) return false;

  // Reset visited array and path for the second DFS
  visited.fill(false);
  path.length = 0;

  // Remove the first path from the graph
  for (let i = 0; i < path1.length - 1; i++) {
    const idx = graph[path1[i]].indexOf(path1[i + 1]);
    graph[path1[i]].splice(idx, 1);
  }

  const path2 = dfs(s);
  if (!path2) return false;

  return [path1, path2];
}

const [N, M, s, t] = [5, 6, 1, 5];
const trails = [
  [1, 2],
  [2, 3],
  [3, 5],
  [1, 2],
  [2, 4],
  [4, 5],
];

solution(N, M, s, t, trails);
