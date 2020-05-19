import faker from 'faker';

import camelize from 'camelize';
import { FormFieldConditionBuilder } from './conditions/formFieldConditionBuilder';

export class FormFieldBuilderBase {
  parentBuilder;

  alias: string;
  caption: string;
  id: string;
  fieldTypeId;
  preValues = [];
  settings?: { DefaultValue: string };
  invalidErrorMessage: string;
  containsSensitiveData: boolean;
  regex: string;
  mandatory: boolean;
  requiredErrorMessage;
  removePrevalueEditor;

  formFieldConditionBuilder;

  withCaption(caption: string) {
    this.caption = caption;

    return this;
  }

  withId(id: string) {
    this.id = id;

    return this;
  }

  withMandatory(mandatory: boolean) {
    this.mandatory = mandatory;

    return this;
  }

  withRequiredErrorMessage(requiredErrorMessage) {
    this.requiredErrorMessage = requiredErrorMessage;

    return this;
  }

  withValidationMessage(invalidErrorMessage: string) {
    this.invalidErrorMessage = invalidErrorMessage;

    return this;
  }

  withValidationRegex(regex: string) {
    this.regex = regex;

    return this;
  }

  withAlias(alias: string) {
    this.alias = alias;

    return this;
  }
  withSensitiveData(containsSensitiveData: boolean) {
    this.containsSensitiveData = containsSensitiveData;
    return this;
  }

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
    this.formFieldConditionBuilder = new FormFieldConditionBuilder(this);
  }

  done() {
    return this.parentBuilder;
  }

  addShowAllConditions() {
    this.formFieldConditionBuilder.withActionAndLogic('Show', 'All');

    return this.formFieldConditionBuilder;
  }

  addShowAnyConditions() {
    this.formFieldConditionBuilder.withActionAndLogic('Show', 'Any');

    return this.formFieldConditionBuilder;
  }

  addHideAllConditions() {
    this.formFieldConditionBuilder.withActionAndLogic('Hide', 'All');

    return this.formFieldConditionBuilder;
  }

  addHideAnyConditions() {
    this.formFieldConditionBuilder.withActionAndLogic('Hide', 'Any');

    return this.formFieldConditionBuilder;
  }

  build() {
    const id = this.id || faker.random.uuid();
    const caption = this.caption || id;
    const alias = this.alias || 'a' + camelize(caption);

    return {
      alias: this.alias || alias,
      caption,
      fieldTypeId: this.fieldTypeId,
      id,
      regex: this.regex || null,
      invalidErrorMessage: this.invalidErrorMessage || null,
      requiredErrorMessage: this.requiredErrorMessage || null,
      preValues: this.preValues,
      removePrevalueEditor: this.removePrevalueEditor || false,
      mandatory: this.mandatory || false,
      containsSensitiveData: this.containsSensitiveData || false,
      settings: this.settings,
      condition: this.formFieldConditionBuilder.build(),
    };
  }
}
