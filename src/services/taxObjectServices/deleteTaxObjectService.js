import { logError } from '../../config/logError.js';
import 'dotenv/config';
import { taxObjectsQuery } from '../../postgresQuery/taxObjectsQuery.js';

export const deleteTaxObjectService = async (client, id) => {
  try {
    // Виконання запиту
    const result = await client.query(taxObjectsQuery.deleteQuery, [id]);

    // Перевірка, чи було знайдено і видалено запис
    if (result.rowCount === 0) {
      return null;
    }

    // Повернення даних видаленого ітема
    return result.rows[0];
  } catch (error) {
    console.error('Failed to delete tax object', error);
    logError(error, null, 'Failed to delete tax object');
    throw new Error('Failed to delete tax object');
  }
};
