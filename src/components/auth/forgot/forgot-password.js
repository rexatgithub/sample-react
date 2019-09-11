import React from 'react'
import { View, Flex, FlexItem } from '@instructure/ui-layout'
import { Link } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { TextInput } from '@instructure/ui-forms'
import { FormFieldGroup } from '@instructure/ui-form-field'

const ForgotPassword = () => (
  <View shadow="resting" as="div" background="default" padding="large">
    <FormFieldGroup>
      <TextInput label="Enter Last Name" />
      <TextInput label="Enter Your Email Address" />
      <Flex justifyItems="space-between">
        <FlexItem>
          <Button variant="primary">Send Password Reset Link</Button>
        </FlexItem>
        <FlexItem>
          <Link href="/login">Login?</Link>
        </FlexItem>
      </Flex>
    </FormFieldGroup>
  </View>
)

export default ForgotPassword
