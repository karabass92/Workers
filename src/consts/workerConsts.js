export const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export const tailLayout = {
    wrapperCol: {
        offset: 11,
    },
};

export const surnameRules = { required: true, message: 'Необходимо заполнить данное поле', max: 15 };

export const nameRules = { required: true, message: 'Необходимо заполнить данное поле', max: 15 };

export const secondNameRules = { required: true, message: 'Необходимо заполнить данное поле', max: 15 };

export const telephoneRules = { required: true, message: 'Необходимо заполнить данное поле', len: 10};

export const departmentRules = { required: true, message: 'Необходимо заполнить данное поле' };

export const positionRules = { required: true, message: 'Необходимо заполнить данное поле' };

export const departmentOptions = [
    { 
        value: 'Front-end', 
        text: 'Front-end'
    },
    { 
        value: 'Back-end', 
        text: 'Back-end'
    },
    { 
        value: 'Q & A', 
        text: 'Q & A'
    },
    { 
        value: 'HR', 
        text: 'HR'
    },
];

export const positionOptions = [
    { 
        value: 'junior', 
        text: 'Junior'
    },
    { 
        value: 'middle', 
        text: 'Middle'
    },
    { 
        value: 'senior', 
        text: 'Senior'
    },
    { 
        value: 'teamlead', 
        text: 'Team lead'
    },
];