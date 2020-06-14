# Actions Compare  Times repository is a test environment for the Git Actions benchmarking logic that is being utilized on our  veg/hyphy repository. 

# Behind the scenes
This repository uses a customized branch of https://github.com/rhysd/github-action-benchmark to populate a results page wtih run-time metrics. The customized branch is located at https://github.com/veg/github-action-benchmark and adds an additional tool to run an inverse of the ops/sec function from the orignal repository. 

# How-to
### Note: This is a simple repository that was used as a test trigger while working on a Github Actions branch for benchmarking. The bulk of this project can be found at https://github.com/veg/github-action-benchmark

To use this repository to trigger a job, simply make a pullrequest with small changes. As soon as this pullrequest is initiated Github Actions trigger the benchmarking logic. If there are noticable performance changes than you will be alerted via a comment within your pullrequest. Results can be viewed under GH-Pages with repo_name/dev/bench and example for this testing repository is https://kjlevitz.github.io/actionsCompareTimes/dev/bench/

# Current state
Currently, this repository served it's purpose as a test enrivonment and the knowledge gained has been implemented within our production environment at https://github.com/veg/hyphy

# Production environment examples which this repository helped implement
## To see this in action you can view a real world example at https://github.com/veg/hyphy/runs/675752555
## To see the results page built to GH-Pages you can view http://veg.github.io/hyphy/dev/bench/
