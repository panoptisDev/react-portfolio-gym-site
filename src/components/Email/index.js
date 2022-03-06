import {
  EmailContainer,
  EmailContent,
  EmailH1,
  EmailP,
  EmailForm
} from './EmailElements'

function Email() {
  return (
    <EmailContainer>
      <EmailContent>
        <EmailH1>Get Access to Members Only Perks</EmailH1>
        <EmailP>Sign Up for our Newsletter today!</EmailP>
          <EmailForm>
            <label for="email">
              <input type="email" placeholder="Enter your email address" id="email" />
            </label>
            <button type="submit" class="button">Sign Up</button>
          </EmailForm>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email