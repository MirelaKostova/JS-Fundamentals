function constructionCrew(workerObj) {
  if (workerObj.dizziness) {
    //    0.1ml per kilogram per year of experience.
    workerObj.levelOfHydrated += workerObj.weight * workerObj.experience * 0.1;
    workerObj.dizziness = false;
  }

  return workerObj;
}

console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
