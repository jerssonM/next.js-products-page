import * as auth from 'next-auth/react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { AuthLoginForm } from '@/components/auth-login-form'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockImplementation(() => ({ push: jest.fn() })),
  useSearchParams: jest
    .fn()
    .mockReturnValue({ set: jest.fn(), get: jest.fn() }),
}))

describe('<AuthLoginForm />', () => {
  it('should contains title', () => {
    render(<AuthLoginForm />)

    const title = screen.getByText(/Genius/i)
    expect(title).toBeInTheDocument()
  })

  it('should call login with empty fields', async () => {
    render(<AuthLoginForm />)

    const buttonLogin = screen.getByTestId('auth-login-form__button-sign-in')
    fireEvent.click(buttonLogin)

    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument()
      expect(screen.getByText('Password is required')).toBeInTheDocument()
      expect(
        screen.getByText('You must accept the terms and conditions')
      ).toBeInTheDocument()
    })
  })

  it('should call login', async () => {
    const spyLogin = jest.spyOn(auth, 'signIn').mockImplementation(jest.fn())
    render(<AuthLoginForm />)

    const inputUsername = screen.getByTestId('auth-login-form__input-username')
    fireEvent.change(inputUsername, { target: { value: 'user' } })
    const inputPassword = screen.getByTestId('auth-login-form__input-password')
    fireEvent.change(inputPassword, { target: { value: 'pass' } })
    const checkboxTerms = screen.getByTestId('auth-login-form__checkbox-terms')
    fireEvent.click(checkboxTerms)

    const buttonLogin = screen.getByTestId('auth-login-form__button-sign-in')
    fireEvent.click(buttonLogin)

    await waitFor(() => {
      expect(spyLogin).toHaveBeenCalled()
    })
  })

  it('should call login with wrong credentials', async () => {
    const spyLogin = jest
      .spyOn(auth, 'signIn')
      .mockImplementation(jest.fn().mockReturnValue({ error: 'error' }))
    render(<AuthLoginForm />)

    const inputUsername = screen.getByTestId('auth-login-form__input-username')
    fireEvent.change(inputUsername, { target: { value: 'user' } })
    const inputPassword = screen.getByTestId('auth-login-form__input-password')
    fireEvent.change(inputPassword, { target: { value: 'pass' } })
    const checkboxTerms = screen.getByTestId('auth-login-form__checkbox-terms')
    fireEvent.click(checkboxTerms)

    const buttonLogin = screen.getByTestId('auth-login-form__button-sign-in')
    fireEvent.click(buttonLogin)

    await waitFor(() => {
      expect(spyLogin).toHaveBeenCalled()
      expect(
        screen.getByText('Invalid username or password')
      ).toBeInTheDocument()
    })
  })
})
