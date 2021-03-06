import { WorkflowSettings } from './workflowSettings';
export class Workflow {
  executeOn: number = 0;
  workflowTypeId: string;
  includeSensitiveData = false;
  name: string;
  workflowTypeName: string;
  settings: any | WorkflowSettings[] = [];
}
