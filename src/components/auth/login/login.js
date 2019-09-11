import React from 'react'
import { FormFieldGroup } from '@instructure/ui-form-field'
import { TextInput, Checkbox } from '@instructure/ui-forms'
import { Button } from '@instructure/ui-buttons'
import { Grid, GridCol, GridRow, View, Flex, FlexItem } from '@instructure/ui-layout'
import { Link } from '@instructure/ui-elements'
import './login.css'

const Login = () => (
  <Grid startAt="medium" vAlign="middle" colSpacing="none">
    <GridRow>
      <GridCol colSpacing="large">
        <View shadow="resting" as="div" background="default" padding="large">
          <FormFieldGroup description="Log In">
            <TextInput label="Email" />
            <TextInput label="Password" type="password" />
            <Flex justifyItems="space-between">
              <FlexItem>
                <Checkbox label="Remember me" value={1} />
              </FlexItem>
              <FlexItem>
                <Link href="/forgot-password">Forgot password?</Link>
              </FlexItem>
            </Flex>

            <Button variant="primary">Login</Button>
          </FormFieldGroup>
        </View>
      </GridCol>
    </GridRow>
  </Grid>
)

export default Login
