# actionsCompareTimes
Compare results times from Actions


https://developer.github.com/v3/actions/workflow_runs/#list-repository-workflow-runs

{
  "total_count": 1,
  "workflow_runs": [
    {
      "id": 30433642,
      "node_id": "MDEyOldvcmtmbG93IFJ1bjI2OTI4OQ==",
      "head_branch": "master",
      "head_sha": "acb5820ced9479c074f688cc328bf03f341a511d",
      "run_number": 562,
      "event": "push",
      "status": "queued",
      "conclusion": null,
      "url": "https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642",
      "html_url": "https://github.com/octo-org/octo-repo/actions/runs/30433642",
      "pull_requests": [

      ],
      "created_at": "2020-01-22T19:33:08Z", <---- 
      "updated_at": "2020-01-22T19:33:08Z", <---- GET TIME DELTA FROM THESE TWO
      
      Compare time delta from Prev-Run with Current-Run
