//cross validation with newpassword and confirm new password
//if validation is true return null
import { AbstractControl } from "@angular/forms";

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const password = control.get("newpassword");
  const confirmPassword = control.get("confirmpassword");
if(password.pristine||confirmPassword.pristine){
  return null;
}

  return password && confirmPassword && password.value != confirmPassword.value
    ? { 'misMatch': true }
    : null;
}
