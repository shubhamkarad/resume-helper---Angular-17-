import { AbstractControl, ValidationErrors } from "@angular/forms";

export function fileSizeValidator(maxSize: number): ValidationErrors {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value as File;
    if (file) {
      const fileSize = file.size;
      if (fileSize > maxSize) {
        return { FileSizeExceeded: { value: fileSize } };
      }
    }
    return null;
  };
}
