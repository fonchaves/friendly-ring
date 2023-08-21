import PersonRepository from "../repositories/personRepository";
import RelationshipRepository from "../repositories/relationshipRepository";

export default class RecommendationService {
    static getRecommendationByCpf(cpf: string)  {
        // Check if CPF is valid
        if (cpf.length !== 11) {
            throw new Error("Invalid CPF");
        }

        // Check if person exists
        const personExists = PersonRepository.getInstance().getPersonByCpf(cpf);

        // If not, throw error
        if (!personExists) {
            throw new Error("User not found");
        }

        // find relationships of person
        const relationship = RelationshipRepository.getInstance().getRelationshipByCpf(cpf);
        if (relationship.length === 0) throw new Error("User has no friends");

        const listFriends: Array<any> = [];

        relationship.forEach((friend) => {
            const friendsOfFriends = RelationshipRepository.getInstance().getRelationshipByCpf(friend.cpf2);

            if (friendsOfFriends.length > 0) {
                friendsOfFriends.forEach((item)=> {
                    const friendAlreadyAdded = listFriends.findIndex(i => i.cpf === item.cpf2);

                    if(friendAlreadyAdded >= 0) {
                        listFriends[friendAlreadyAdded].relationship++;
                    } else {
                        listFriends.push({ cpf: item.cpf2, relationship: 1});
                    }
                });
            }
        });

        const orderedList = listFriends
            .sort((a,b) => {
                return (b.relationship < a.relationship) ? -1 : (b.relationship > a.relationship) ? 1 : 0;
            })
            .map((item) => {
                return item.cpf;
            });

        return orderedList;
    }
}
