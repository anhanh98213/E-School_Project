export class User {
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  lastLogin: string;
  fullName: string;
  firstName: string;
  lastName: string;
  dayOfBirth: Date;
  placeOfBirth: string;
  gender: string;
  nationality: string;
  religion: string;
  maritalStatus: string;
  permanentAddress: string;
  phoneNumber: string;
  avatar: string;
}

export class Token {
  status: {
    code: string,
    message: string,
  };
  data: {
    username: string,
    role: string,
    token: string,
  }
}

export class CountStudent {
  status: {
    code: string,
    message: string,
  };
  data: {
    total: number,
    male: number,
    female: number,
    otherGender: number
  }
}

export class CountManager {
  status: {
    code: string,
    message: string,
  };
  data: {
    total: number,
    male: number,
    female: number,
    otherGender: number
  }
}

export class CountLecturer {
  status: {
    code: string,
    message: string,
  };
  data: {
    total: number,
    male: number,
    female: number,
    otherGender: number
  }
}

export class CountGuardian {
  status: {
    code: string,
    message: string,
  };
  data: {
    total: number,
    male: number,
    female: number,
    otherGender: number
  }
}


