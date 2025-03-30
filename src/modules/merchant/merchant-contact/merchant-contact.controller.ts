import e, { Request, Response } from "express";
import * as merchantContactService from "@/services/merchantContact.service";

/**
 * #### Merchant Contact

* Get user's merchant contacts
* Get merchant contact by Id
* Create merchant contact
* Update merchant contact
* Delete merchant contact
 */

export const listMerchantContacts = async (req: Request, res: Response) => {
  try {
    const merchantContacts = await merchantContactService.listMerchantContacts();
    res.json(merchantContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

