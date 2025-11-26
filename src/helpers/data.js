import { helpData } from '@/assets/data/help';
import { dataTableRecords, emailsData, projectsData, timelineData, transactionsData } from '@/assets/data/other';
import { attributeListData, ordersData, permissionsList, productData, reviewListData, roleListData, sellersData, socialGroupsData, userData, warehouseData } from '@/assets/data/products';
import { todoData } from '@/assets/data/task';
import { notificationsData } from '@/assets/data/topbar';
import * as yup from 'yup';

// Simplified data fetching functions for frontend-only deployment
export const getNotifications = async () => {
  return notificationsData;
};

export const getProductData = async () => {
  return productData;
};

export const getAllTimeline = async () => {
  return timelineData;
};

export const getAttributeData = async () => {
  return attributeListData;
};

export const getHelpData = async () => {
  return helpData;
};

export const getSellersData = async () => {
  return sellersData;
};

export const getAllUsers = async () => {
  return userData;
};

export const getAllTransactions = async () => {
  return transactionsData;
};

export const getJoinedGroups = async () => {
  const data = socialGroupsData.filter(group => group.joined);
  return data;
};

export const getAllDataTableRecords = async () => {
  return dataTableRecords;
};

export const getUserById = async (id) => {
  const user = userData.find(user => user.id === id);
  return user;
};

export const getPermissionsListData = async () => {
  return permissionsList;
};

export const getRoleListData = async () => {
  return roleListData;
};

export const getAllProjects = async () => {
  return projectsData;
};

export const getProductById = async (id) => {
  const data = productData.find(product => product.id == id);
  return data;
};

export const getAllWareHouseProducts = async () => {
  const data = warehouseData.map(item => {
    const user = userData.find(user => user.id === item.userId);
    return {
      ...item,
      user
    };
  });
  return data;
};

export const getAllOrders = async () => {
  const data = ordersData.map(order => {
    const customer = userData.find(user => user.id === order.customerId);
    const product = productData.find(product => product.id === order.productId);
    return {
      ...order,
      customer,
      product
    };
  });
  return data;
};

export const getAllReviews = async () => {
  const data = reviewListData.map((item, idx) => {
    const user = userData.find(user => user.id == item.userId);
    return {
      ...item,
      user
    };
  });
  return data;
};

export const getAllTasks = async () => {
  const data = todoData.map(task => {
    const employee = userData.find(seller => seller.id === task.employeeId);
    return {
      ...task,
      employee
    };
  });
  return data;
};

// Email helper functions
export const getEmailsCategoryCount = async () => {
  // Count emails by category for the email app
  return {
    inbox: emailsData.filter(email => email.toId === '101' && !email.deleted).length,
    starred: emailsData.filter(email => email.starred).length,
    draft: emailsData.filter(email => email.draft).length,
    sent: emailsData.filter(email => email.fromId === '101').length,
    deleted: emailsData.filter(email => email.deleted).length,
    important: emailsData.filter(email => email.important).length
  };
};

export const serverSideFormValidate = async (data) => {
  const formSchema = yup.object({
    fName: yup.string().min(3, 'First name should have at least 3 characters').max(50, 'First name should not be more than 50 characters').required('First name is required'),
    lName: yup.string().min(3, 'Last name should have at least 3 characters').max(50, 'Last name should not be more than 50 characters').required('Last name is required'),
    username: yup.string().min(3, 'Username should have at least 3 characters').max(20, 'Username should not be more than 20 characters').required('Username is required'),
    city: yup.string().min(3, 'City should have at least 3 characters').max(20, 'City should not be more than 20 characters').required('City is required'),
    state: yup.string().min(3, 'State should have at least 3 characters').max(20, 'State should not be more than 20 characters').required('State is required'),
    zip: yup.number().required('Zip code is required'),
    agreeToTerms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions')
  });

  try {
    await formSchema.validate(data, { abortEarly: false });
    return { isValid: true };
  } catch (error) {
    const errors = {};
    error.inner.forEach(err => {
      errors[err.path] = err.message;
    });
    return { isValid: false, errors };
  }
};

export const getEmailDetails = async (id) => {
  const email = emailsData.find(email => email.id === id);
  if (email) {
    email.from = userData.find(user => user.id === email.fromId);
    email.to = userData.find(user => user.id === email.toId);
    return email;
  }
};

export const getAllEmails = async (filter) => {
  const fillDataToEmails = (emails) => {
    return emails.map(email => {
      const from = userData.find(user => user.id === email.fromId);
      const to = userData.find(user => user.id === email.toId);
      return {
        ...email,
        from,
        to
      };
    });
  };

  let allEmailsData;
  if (filter === 'important') allEmailsData = fillDataToEmails(emailsData.filter(email => email.important));
  else if (filter === 'deleted') allEmailsData = fillDataToEmails(emailsData.filter(email => email.deleted));
  else if (filter === 'sent') allEmailsData = fillDataToEmails(emailsData.filter(email => email.fromId === '101'));
  else if (filter === 'draft') allEmailsData = fillDataToEmails(emailsData.filter(email => email.draft));
  else if (filter === 'starred') allEmailsData = fillDataToEmails(emailsData.filter(email => email.starred));
  else allEmailsData = fillDataToEmails(emailsData.filter(email => email.toId === '101'));

  return allEmailsData;
};