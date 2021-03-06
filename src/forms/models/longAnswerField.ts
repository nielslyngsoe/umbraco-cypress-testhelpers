import { FormField } from './formField';

export class LongAnswerField extends FormField {
  constructor(
    id: string,
    public alias?: string,
    public caption?: string,
    public value?: string,
    containsSensitiveData?: boolean,
    mandatory?: boolean,
    requiredErrorMessage?: string,
    regex?: string,
    invalidErrorMessage?: string,
  ) {
    super(id, containsSensitiveData, mandatory, requiredErrorMessage, regex, invalidErrorMessage);
  }
}
